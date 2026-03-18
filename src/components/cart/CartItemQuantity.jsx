export default function CartItemQuantity({ item, addToCart, removeFromCart }) {
  return (
    <div className="cart-item-buttons">
      <button onClick={() => removeFromCart(item.id)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => addToCart(item)}>+</button>
    </div>
  );
}
