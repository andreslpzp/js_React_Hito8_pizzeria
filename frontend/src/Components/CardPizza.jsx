import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import '../assets/CSS/CardPizza.css';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <ul>
        {pizza.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>Añadir al carrito</button>
    </div>
  );
};

export default CardPizza;
