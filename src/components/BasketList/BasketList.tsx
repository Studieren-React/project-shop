import './BasketList.css';
import { BasketListItem } from './BasketListItem';
import { TOrder } from '../../types';

interface BasketListProps {
  orders: TOrder[],
  handleVisibleBasket: () => void,
  removeFromCart: (id: string) => void
}

export function BasketList({ orders, handleVisibleBasket, removeFromCart }: BasketListProps) {
  const commonCost: number = orders.reduce((acc: number, order: TOrder) => acc + (order.price.finalPrice * order.qty), 0);

  return (
    <div className="collection basket-list">
      <a
        className="collection-item active"
      >
        Basket
        <span
          className="secondary-content basket-list-item"
          onClick={handleVisibleBasket}
        >
          <i className="material-icons">close</i>
        </span>
      </a>
      {orders.length > 0
        ? orders.map((order: TOrder) => <BasketListItem key={order.mainId} order={order} removeFromCart={removeFromCart} />)
        : <a className="collection-item">Cart is empty!</a>
      }
      <a
        className="collection-item active"
      >Common cost: {commonCost > 0 ? commonCost : 0}</a>
    </div>
  );
}