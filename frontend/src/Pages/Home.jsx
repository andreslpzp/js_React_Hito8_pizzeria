import React, { useState, useEffect } from 'react';
import Pizza from './Pizza'; 
import '../assets/CSS/Home.css';
import fondo_restaurant from '../assets/img/fondo_restaurant.jpg';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  // Fetches all pizzas initially
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/pizzas');

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check the content type before parsing as JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response");
        }

        // Parse the response as JSON only if it's valid JSON
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
        setError(error.message); // Set the error message
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="home">
      <img src={fondo_restaurant} alt="Fondo del restaurante" className="fondo" />
      <h1 className="titulo">Bienvenido a Pizzería Napoli</h1>
      <div className="pizza-list">
        {loading ? ( // Muestra un mensaje de carga si está cargando
          <p>Cargando pizzas...</p>
        ) : error ? ( // Muestra mensaje de error si hay un error
          <p>Error: {error}</p>
        ) : pizzas.length > 0 ? ( // Muestra las pizzas si hay datos
          pizzas.map((pizza) => (
            <Pizza key={pizza.id} pizza={pizza} />
          ))
        ) : (
          <p>No se encontraron pizzas.</p> // Mensaje si no hay pizzas
        )}
      </div>
    </div>
  );
}

export default Home;



