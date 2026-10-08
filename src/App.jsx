import { useState } from "react";
import PlantList from "./PlantList";
import CartList from "./CartList";
import PLANTS from "./data";

export default function App() {
  const [items, setItems] = useState([]);
  const addToCart = (PlantList) => {
    const existingItem = items.find((item) => item.id === PlantList.id);
    if (existingItem) {
      setItems(
        items.map((item) =>
          item.id === PlantList.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setItems([...items, { ...PlantList, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setItems(
      items
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantList PlantList={PLANTS} addToCart={addToCart} />
        <CartList
          items={items}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
