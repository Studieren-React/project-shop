import './ProductsList.css';
import { ProductItem } from './ProductItem';
import { IShop } from '../../../types';

interface ProductsListProps {
  products: IShop[];
  addToCart: (order: IShop) => void;
}

export function ProductsList({ products = [], addToCart }: ProductsListProps) {
  return (
    <div className="items">
      {!products.length ? (
        <h3>Nothing found</h3>
      ) : (
        products.map((product: IShop, index: number) => (
          <ProductItem
            key={`${product.mainId}_${index}`}
            product={product}
            addToCart={addToCart}
          />
        ))
      )}
    </div>
  );
}
