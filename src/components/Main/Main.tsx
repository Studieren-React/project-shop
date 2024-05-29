import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../../config.ts';
import { Preloader } from '../Preloader';
import { ProductsList } from './ProductsList';
import { IShop, TOrder } from '../../types';
import { Cart } from '../Cart';
import { BasketList } from '../BasketList';
import { EDirection } from '../../enums';

export function Main() {
  const [products, setProducts] = useState<IShop[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [isVisibleBasket, setVisibleBasket] = useState<boolean>(false);

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

  const removeFromCart = (id: string): void => {
    setOrders(orders.filter((order: TOrder) => order.mainId !== id));
  }

  const handleVisibleBasket = (): void => {
    setVisibleBasket(!isVisibleBasket);
  }

  const handleProduct = (id: string, direction: EDirection): void => {
    const findOrder: TOrder | undefined = orders.find((order: TOrder) => order.mainId === id);

    if (findOrder) {
      // increase product quantity
      if (direction === EDirection.Add) {
        findOrder.qty += 1;
        setOrders([...new Set([...orders, findOrder])]);

        return;
      }

      // decrease product quantity or remove product
      if (direction === EDirection.Remove) {
        findOrder.qty -= 1;

        // remove product
        if (findOrder.qty <= 0) {
          removeFromCart(id);

          return;
        }

        setOrders([...new Set([...orders, findOrder])]);
      }
    }
  }

  useEffect((): void => {
    setLoading(true);
    getProducts().then(() => setLoading(false));
  }, []);

  return (
    <main className="content container">
      <Cart
        quantity={orders.length}
        handleVisibleBasket={handleVisibleBasket}
      />
      {
        loading
          ? <Preloader />
          : <ProductsList
              products={products}
              addToCart={addToCart}
            />
      }
      { isVisibleBasket && <BasketList
          orders={orders}
          handleVisibleBasket={handleVisibleBasket}
          removeFromCart={removeFromCart}
          handleProduct={handleProduct}
        />
      }
    </main>
  );
}
