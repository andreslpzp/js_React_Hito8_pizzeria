import React, { useState } from 'react';
import '../assets/CSS/PizzaCart.css';

function PizzaCart({ pizza, onQuantityChange }) {
  const [quantity, setQuantity] = useState(0); // Initial quantity set to 0

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(0, quantity + delta); // Ensure minimum quantity is 0
    setQuantity(newQuantity);
    onQuantityChange(pizza.id, newQuantity); // Pass pizza ID and new quantity to callback
  };

  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <ul>
        {pizza.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
    </div>
  );
}

export default PizzaCart;
