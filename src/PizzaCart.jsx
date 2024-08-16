import React, { useState } from 'react';
import '../src/assets/CSS/PizzaCart.css';


function PizzaCart({ pizza, addProduct, removeProduct }) {
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
      <p>Cantidad: {pizza.quantity}</p>
      <div className="cart-controls">
        <button onClick={() => addProduct(pizza.id)}>Agregar</button>
        <button onClick={() => removeProduct(pizza.id)}>Quitar</button>
      </div>
    </div>
  );
}

export default pizzaCart;