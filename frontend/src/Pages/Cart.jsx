import React, { useState, useEffect, useContext } from 'react';
import CardPizza from '../Components/CardPizza';
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext'; // Importamos UserContext
import '../assets/CSS/Cart.css';

const Cart = () => {
  const [pizzas, setPizzas] = useState([]);
  const { cart, removeFromCart, addToCart, totalPrice } = useContext(CartContext);
  const { token } = useContext(UserContext); // Obtenemos el token del UserContext
  const [loading, setLoading] = useState(false); // Estado para mostrar si estamos enviando el carrito
  const [message, setMessage] = useState(null); // Estado para el mensaje de éxito o error

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

  const handlePayment = async () => {
    if (!token) {
      alert("Debes iniciar sesión para realizar el pago.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('http://localhost:5001/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Incluimos el token en la cabecera
        },
        body: JSON.stringify({ items: cart }), // Enviamos los items del carrito como un arreglo
      });

      if (!response.ok) {
        throw new Error('Error al procesar el pago');
      }

      const result = await response.json();
      setMessage("¡Compra realizada con éxito!");
      console.log("Compra realizada con éxito:", result);
    } catch (error) {
      console.error(error);
      setMessage("Hubo un error al procesar tu compra. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cart">
      <h1 className="titulo">Tu carrito de compras</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            pizza={pizza}
            quantity={cart.find(item => item.id === pizza.id)?.quantity || 0}
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
        <button
          className="boton_pago"
          onClick={handlePayment} // Llamamos a handlePayment al hacer clic
          disabled={!token || loading} // Deshabilitamos el botón si no hay token o si está cargando
        >
          {loading ? "Procesando..." : "Pagar"}
        </button>

        {message && <p>{message}</p>} {/* Mostramos el mensaje de éxito o error */}
      </div>
    </div>
  );
};

export default Cart;









