import React, { useState } from 'react';
import PizzaCart from '../Components/PizzaCart';
import pizzas from '../Pizzas';
import '../assets/CSS/Cart.css';

function Cart() {
  const [selectedPizzas, setSelectedPizzas] = useState([]);

  const handleQuantityChange = (pizzaId, newQuantity) => {
    const pizza = pizzas.find((p) => p.id === pizzaId);

    setSelectedPizzas((prevSelectedPizzas) => {
      if (newQuantity === 0) {
        return prevSelectedPizzas.filter((p) => p.id !== pizzaId);
      } else {
        const pizzaExists = prevSelectedPizzas.find((p) => p.id === pizzaId);
        if (pizzaExists) {
          return prevSelectedPizzas.map((p) =>
            p.id === pizzaId ? { ...p, quantity: newQuantity } : p
          );
        } else {
          return [...prevSelectedPizzas, { ...pizza, quantity: newQuantity }];
        }
      }
    });
  };

  const calculateTotal = () => {
    return selectedPizzas.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
  };

  return (
    <div className="cart">
      <h1 className="titulo">Selecciona las pizzas que deseas para agregarlas al carrito</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <PizzaCart key={pizza.id} pizza={pizza} onQuantityChange={handleQuantityChange} />
        ))}
      </div>

      <div className="seccion_pago">
        <h2>Tu pedido:</h2>
        <ul>
          {selectedPizzas.map((pizza) => (
            <li key={pizza.id}>{pizza.name}: {pizza.quantity}</li>
          ))}
        </ul>

        <h3>Total a pagar: ${calculateTotal()}</h3>
        <button className="boton_pago">Pagar</button>
      </div>
    </div>
  );
}

export default Cart;


