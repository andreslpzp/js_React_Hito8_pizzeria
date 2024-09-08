import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import '../assets/CSS/Pizza.css';

const Pizza = ({ pizza }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  
  // Check if the pizza is already in the cart
  const pizzaInCart = cart.find(p => p.id === pizza.id);

  const handleAddToCart = () => {
    if (pizzaInCart) {
      // Update quantity if pizza already exists in the cart
      addToCart({ ...pizza, quantity: (pizzaInCart.quantity || 0) + 1 });
    } else {
      // Add new pizza to the cart
      addToCart({ ...pizza, quantity: 1 });
    }
  };

  const handleRemoveFromCart = () => {
    if (pizzaInCart) {
      removeFromCart(pizza.id);
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
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        {pizzaInCart ? `Añadida al carrito (${pizzaInCart.quantity})` : 'Añadir al carrito'}
      </button>
      {pizzaInCart && (
        <button className="remove-from-cart-button" onClick={handleRemoveFromCart}>
          Eliminar del carrito
        </button>
      )}
    </div>
  );
};

export default Pizza;







