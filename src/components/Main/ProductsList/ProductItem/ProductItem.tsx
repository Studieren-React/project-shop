import './ProductItem.css';
import { IShop } from '../../../../types';

interface ProductItemProps {
  product: IShop;
}

export function ProductItem({ product }: ProductItemProps) {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    product;
  const { background } = displayAssets[0];
  const { regularPrice } = price;

  return (
    <div className="card product-card" id={mainId}>
      <div className="card-image">
        <img src={background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
        <div className="card-action">
          <button type="button" className="btn">
            Buy!
          </button>
          <span className="right product-price">{regularPrice}</span>
        </div>
      </div>
    </div>
  );
}
