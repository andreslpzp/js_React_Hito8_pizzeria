import React, { useEffect, useState } from 'react';
import '../assets/CSS/PizzaCart.css';

function PizzaCart({ pizza, quantity, onQuantityChange }) {
  const [localQuantity, setLocalQuantity] = useState(quantity); // Initial quantity set to the value passed via props

  useEffect(() => {
    setLocalQuantity(quantity); // Update local quantity when quantity prop changes
  }, [quantity]);

  const handleQuantityChange = (delta) => {
    // Ensure the new quantity does not go below 0
    const newQuantity = Math.max(0, localQuantity + delta);
    setLocalQuantity(newQuantity);
    onQuantityChange(pizza.id, newQuantity); // Pass the updated quantity to the parent component
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
      <div className="quantity-controls-cart">
        {/* The button will subtract 1 unit when clicked */}
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{localQuantity}</span>
        {/* The button will add 1 unit when clicked */}
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
    </div>
  );
}

export default PizzaCart;



