import React, { useState, useEffect, useContext } from 'react';
import PizzaCart from '../Components/PizzaCart';
import { CartContext } from '../Context/CartContext';
import '../assets/CSS/Cart.css';

const Cart = () => {
  const [pizzas, setPizzas] = useState([]);
  const { cart, removeFromCart, addToCart, totalPrice } = useContext(CartContext);

  // Crea un mapa para acceder rápidamente a las cantidades de cada pizza en el carrito
  const cartMap = cart.reduce((acc, pizza) => {
    acc[pizza.id] = pizza.quantity;
    return acc;
  }, {});

  // Fetch pizzas from the API
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/pizzas/');
        if (!response.ok) {
          throw new Error('Error fetching pizzas');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPizzas();
  }, []);

  const handleQuantityChange = (pizzaId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(pizzaId);
    } else {
      const pizza = pizzas.find((p) => p.id === pizzaId);
      if (pizza) {
        addToCart({ ...pizza, quantity: newQuantity });
      }
    }
  };

  return (
    <div className="cart">
      <h1 className="titulo">Tu carrito de compras</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <PizzaCart
            key={pizza.id}
            pizza={pizza}
            quantity={cartMap[pizza.id] || 0} // Usa la cantidad del carrito o 0 si no está en el carrito
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>

      <div className="seccion_pago">
        <h2>Tu pedido:</h2>
        <ul>
          {cart.map((pizza) => (
            <li key={pizza.id}>{pizza.name}: {pizza.quantity}</li>
          ))}
        </ul>

        <h3>Total a pagar: ${totalPrice.toFixed(2)}</h3>
        <button className="boton_pago">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;






