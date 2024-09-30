import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  
import { CartContext } from '../Context/CartContext';
import '../assets/CSS/Pizza.css';

const Pizza = ({ pizza }) => { // Accept pizza as a prop
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);  // Loading state is not needed here
  const [error, setError] = useState(null);  // State to handle errors

  // Check if pizza is passed as a prop
  if (!pizza) {
    return <p>Pizza no encontrada.</p>;  // Show message if pizza is not found
  }

  // Verify if the pizza is already in the cart
  const pizzaInCart = cart.find(p => p.id === pizza.id) || {};
  const { quantity = 0 } = pizzaInCart;  // Default to 0 if pizza is not in the cart

  const handleAddToCart = () => {
    addToCart({ ...pizza, quantity: quantity + 1 });  // Add one unit of the pizza
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(pizza.id);  // Remove one unit of the pizza
    }
  };

  return (
    <div className="pizza-detail">
      <h1 className="pizza-name">{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <p className="pizza-price">Precio: ${pizza.price.toFixed(2)}</p>
      <div className="pizza-ingredients">
        <strong>Ingredientes:</strong>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <p className="pizza-description">{pizza.desc}</p>

      <div className="quantity-controls">
        <button className="quantity-button" onClick={handleRemoveFromCart} disabled={quantity === 0}>
          - Quitar del carrito
        </button>
        <span className="quantity-display">{quantity}</span>
        <button className="quantity-button" onClick={handleAddToCart}>
          + Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Pizza;












