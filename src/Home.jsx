import React from 'react';
import CardPizza from './CardPizza'; // Asegúrate de importar correctamente el componente CardPizza
import pizzas from './Pizzas.js'; // Asegúrate de importar correctamente el array de pizzas
import '../src/assets/CSS/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a nuestra pizzería</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default Home;