import './ProductItem.css';
import { IShop } from '../../../../types';

interface ProductItemProps {
  product: IShop;
  addToCart: (order: IShop) => void;
}

export function ProductItem({ product, addToCart }: ProductItemProps) {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    product;
  const { background } = displayAssets[0];
  const { regularPrice } = price;

  return (
    <div className="card product-card" id={mainId}>
      <div className="card-image">
        <img src={background} alt={displayName} />
      </div>
      <div className="card-content product-card-content">
        <div>
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
        </div>
        <div className="card-action">
          <button
            type="button"
            className="btn"
            onClick={() => addToCart(product)}
          >
            Buy!
          </button>
          <span className="right product-price">{regularPrice}</span>
        </div>
      </div>
    </div>
  );
}
