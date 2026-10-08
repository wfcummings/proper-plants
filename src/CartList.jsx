import CartListItem from "./CartListItem";

export default function CartList({ items, addToCart, removeFromCart }) {
  if (items.length === 0) return <p>Your cart is empty.</p>;

  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <CartListItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </section>
  );
}
