import './BasketListItem.css';
import { TOrder } from '../../../types';

interface BasketListItemProps {
  order: TOrder,
  removeFromCart: (id: string) => void
}

export function BasketListItem({ order, removeFromCart }: BasketListItemProps) {
  const { displayName, qty, price, mainId } = order;
  const { finalPrice } = price;

  return <a className="collection-item">
    {displayName} x {qty} = {finalPrice * qty}
    <span
      className="secondary-content basket-list-item"
      onClick={() => removeFromCart(mainId)}
    >
      <i className="material-icons">close</i>
    </span>
  </a>;
}