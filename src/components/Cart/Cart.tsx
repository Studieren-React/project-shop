import './Cart.css';

interface CartProps {
  quantity: number,
  removeFromCart: (id: string) => void
}

export function Cart({ quantity = 0, removeFromCart }: CartProps) {
  return (
    <div className="cart purple accent-3 white-text">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
