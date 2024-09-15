import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Importamos useParams
import { CartContext } from '../Context/CartContext';
import '../assets/CSS/Pizza.css';

const Pizza = () => {
  const { id } = useParams();  // Usamos useParams para obtener el ID de la pizza
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [pizza, setPizza] = useState(null);  // Estado para almacenar los datos de la pizza
  const [loading, setLoading] = useState(true);  // Estado para manejar la carga
  const [error, setError] = useState(null);  // Estado para manejar errores

  // Hacemos la petición a la API para obtener los detalles de la pizza
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`/api/pizzas/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos de la pizza');
        }
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;  // Muestra mensaje de carga mientras se obtiene la pizza
  }

  if (error) {
    return <p>{error}</p>;  // Muestra mensaje de error si la petición falla
  }

  if (!pizza) {
    return <p>Pizza no encontrada.</p>;  // Muestra mensaje si la pizza no se encuentra
  }

  // Verifica si la pizza ya está en el carrito
  const pizzaInCart = cart.find(p => p.id === pizza.id) || {};
  const { quantity = 0 } = pizzaInCart;  // Por defecto a 0 si la pizza no está en el carrito

  const handleAddToCart = () => {
    addToCart({ ...pizza, quantity: quantity + 1 });  // Añade una unidad de la pizza
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      removeFromCart(pizza.id);  // Remueve una unidad de la pizza
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











