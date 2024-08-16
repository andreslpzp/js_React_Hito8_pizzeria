import React, { useState } from 'react';
import PizzaCart from './PizzaCart'; // Correct component import with uppercase
import pizzas from './Pizzas'; // Ensure this matches the actual file name
import '../src/assets/CSS/Cart.css'; // Import your CSS file

function Cart() {
  const [cartItems, setCartItems] = useState(
    pizzas.map((pizza) => ({ ...pizza, quantity: 0 }))
  );

  const addProduct = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeProduct = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      <div className="pizza-list">
        {cartItems.map((pizza) => (
          <PizzaCart // Make sure to use the corrected component name here
            key={pizza.id} 
            pizza={pizza} 
            addProduct={addProduct} 
            removeProduct={removeProduct} 
          />
        ))}
      </div>
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default Cart;


