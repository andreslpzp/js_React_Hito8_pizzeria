import React, { useContext, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import '../assets/CSS/CardPizza.css';

const CardPizza = ({ pizza }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Check if the pizza is already in the cart
  const pizzaInCart = cart.find(p => p.id === pizza.id) || {};
  const { quantity = 0 } = pizzaInCart; // Default to 0 if pizza is not in the cart

  const handleIncrease = () => {
    addToCart({ ...pizza, quantity: quantity + 1 });
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      removeFromCart(pizza.id);
    }
  };

  return (
    <div className="card">
      <h2>{pizza.name}</h2>
      <ul>
        {pizza.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p class="pizza-price">Precio: ${pizza.price}</p>
      <div className="quantity-controls-cart">
        <button onClick={handleDecrease} disabled={quantity <= 0}>
          -
        </button>
        <span class="quantity">{quantity}</span>
        <button onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default CardPizza;




