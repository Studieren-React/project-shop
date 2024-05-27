import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../../config.ts';
import { Preloader } from '../Preloader';
import { ProductsList } from './ProductsList';
import { IShop, TOrder } from '../../types';
import { Cart } from '../Cart';

export function Main() {
  const [products, setProducts] = useState<IShop[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<TOrder[]>([]);

  const getProducts = async (): Promise<void> => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: API_KEY,
    });

    await fetch(BASE_URL, {
      headers,
    })
      .then((res) => res.json())
      .then((data) => data.shop && setProducts(data.shop));
  };

  const addToCart = (newOrder: IShop): void => {
    const findOrder: TOrder | undefined = orders.find((order: TOrder) => order.mainId === newOrder.mainId);

    if (findOrder) {
      findOrder.qty += 1;
      setOrders([...new Set([...orders, findOrder])]);
    } else {
      setOrders([...new Set([...orders, {...newOrder, qty: 1}])]);
    }
  };

  useEffect((): void => {
    setLoading(true);
    getProducts().then(() => setLoading(false));
  }, []);

  return (
    <main className="content container">
      <Cart quantity={orders.length} />
      {loading ? (
        <Preloader />
      ) : (
        <ProductsList products={products} addToCart={addToCart} />
      )}
    </main>
  );
}
