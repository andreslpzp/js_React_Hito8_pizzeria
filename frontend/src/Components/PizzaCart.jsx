import React, { useEffect, useState } from 'react';
import '../assets/CSS/PizzaCart.css';

function PizzaCart({ pizza, quantity, onQuantityChange }) {
  const [localQuantity, setLocalQuantity] = useState(quantity); // Initial quantity set to the value passed via props

  useEffect(() => {
    setLocalQuantity(quantity); // Update local quantity when quantity prop changes
  }, [quantity]);

  const handleQuantityChange = (delta) => {
    const newQuantity = Math.max(0, localQuantity + delta); // Ensure minimum quantity is 0
    setLocalQuantity(newQuantity);
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
        <span>{localQuantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
    </div>
  );
}

export default PizzaCart;

