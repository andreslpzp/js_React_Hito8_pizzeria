import React, { useState, useEffect } from 'react';
import Pizza from './Pizza'; 
import '../src/assets/CSS/Home.css';
import fondo_restaurant from './assets/img/fondo_restaurant.jpg';

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/pizzas/');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="home">
      <img src={fondo_restaurant} alt="Fondo del restaurante" className="fondo" />
      <h1 className="titulo">Bienvenido a Pizzería Napoli</h1>
      <div className="pizza-list">
        {pizzas.length > 0 ? (
          pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))
        ) : (
          <p>Cargando pizzas...</p>
        )}
      </div>
    </div>
  );
}

export default Home;



