import React, { useState } from 'react';
import pizzas from './Pizzas'; // Asegúrate de que la ruta sea correcta

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (pizza) => {
    // Lógica para agregar un producto al carrito
    setCartItems([...cartItems, { ...pizza, quantity: 1 }]);
  };

  const handleRemoveFromCart = (pizzaId) => {
    // Lógica para eliminar un producto del carrito
    setCartItems(cartItems.filter(item => item.id !== pizzaId));
  };

  const calculateTotal = () => {
    // Lógica para calcular el total del carrito
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              {/* Aquí renderizarías los detalles de cada pizza en el carrito */}
              <p>{item.name}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <p>Total: ${calculateTotal()}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;