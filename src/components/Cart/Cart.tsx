import './Cart.css';

interface CartProps {
  quantity: number,
  handleVisibleBasket: () => void
}

export function Cart({ quantity = 0, handleVisibleBasket }: CartProps) {
  return (
    <div
      onClick={handleVisibleBasket}
      className="cart purple accent-3 white-text"
    >
      <i className="material-icons">shopping_cart</i>
      {
        quantity
          ? <span className="cart-quantity">{quantity}</span>
          : null
      }
    </div>
  );
}
