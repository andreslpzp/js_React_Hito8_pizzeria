import React from 'react';
import './assets/CSS/Pizza.css';

const Pizza = ({ pizza }) => {
    if (!pizza) {
        return <p>Cargando información de la pizza...</p>;
    }

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
            <button className="add-to-cart-button">Añadir al carrito</button>
        </div>
    );
};

export default Pizza;





