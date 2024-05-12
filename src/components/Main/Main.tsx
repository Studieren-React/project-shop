import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL } from '../../config.ts';
import { Preloader } from '../Preloader';
import { ProductsList } from './ProductsList';
import { IShop } from '../../types';

export function Main() {
  const [products, setProducts] = useState<IShop[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
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

  useEffect(() => {
    setLoading(true);
    getProducts().then(() => setLoading(false));
  }, []);

  return (
    <main className="content container">
      {loading ? <Preloader /> : <ProductsList products={products} />}
    </main>
  );
}
