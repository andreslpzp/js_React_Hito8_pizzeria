import React, { useState } from 'react';
import '../src/assets/CSS/CardPizza.css';


function CardPizza({ pizza }) {
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
    </div>
  );
}

export default CardPizza;