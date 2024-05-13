import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../../config.ts';
import { Preloader } from '../Preloader';
import { ProductsList } from './ProductsList';
import { IShop } from '../../types';
import { Cart } from '../Cart';

export function Main() {
  const [products, setProducts] = useState<IShop[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<IShop[]>([]);

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

  const addToCart = (order: IShop): void => {
    setOrders([...new Set([...orders, order])]);
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
