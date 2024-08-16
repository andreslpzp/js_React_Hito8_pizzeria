import React from 'react';
import CardPizza from './CardPizza'; 
import pizzas from './Pizzas.js'; 
import '../src/assets/CSS/Home.css';
import fondo_restaurant from './assets/img/fondo_restaurant.jpg';

function Home() {
  return (
    <div className="home">
      <img src={fondo_restaurant} alt="" className="fondo" />
      <h1 className="titulo">Bienvenido a pizzería Napoli</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;