import { useState } from "react";
import Plants from "./components/plants/Plants";
import plants from "./data";
import Cart from "./components/cart/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const removeFromCart = (plantId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plantId);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== plantId);
      }
      return prevCart.map((item) =>
        item.id === plantId ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };

  return (
    <main>
      <h1>Proper Plants</h1>
      <div className="content">
        <Plants plants={plants} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </div>
    </main>
  );
}
