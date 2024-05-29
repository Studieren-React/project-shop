import './BasketListItem.css';
import { TOrder } from '../../../types';
import { EDirection } from '../../../enums';

interface BasketListItemProps {
  order: TOrder,
  removeFromCart: (id: string) => void,
  handleProduct: (id: string, direction: EDirection) => void
}

export function BasketListItem({
                                 order,
                                 removeFromCart,
                                 handleProduct,
                               }: BasketListItemProps) {
  const { displayName, qty, price, mainId } = order;
  const { regularPrice } = price;

  return <a className="collection-item">
    <span
      className="btn-floating btn-small waves-effect waves-light teal collection-item-right-5"
      onClick={() => handleProduct(mainId, EDirection.Add)}
    >
      <i className="material-icons">add</i>
    </span>
    <span
      className="btn-floating btn-small waves-effect waves-light orange collection-item-right-10"
      onClick={() => handleProduct(mainId, EDirection.Remove)}
    >
      <i className="material-icons">remove</i>
    </span>
    {displayName} x {qty} = {regularPrice * qty}
    <span
      className="secondary-content basket-list-item"
      onClick={() => removeFromCart(mainId)}
    >
      <i className="material-icons">close</i>
    </span>
  </a>;
}