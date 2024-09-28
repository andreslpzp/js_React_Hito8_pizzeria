import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/Navbar.css';
import { CartContext } from '../Context/CartContext';
import { UserContext } from '../Context/UserContext'; // Importamos UserContext

const Navbar = () => {
  const { totalPrice } = useContext(CartContext); // Obtener el total del carrito
  const { token, logout } = useContext(UserContext); // Obtenemos token y logout de UserContext
  const navigate = useNavigate(); // Hook para navegar programáticamente

  const handleLogout = () => {
    logout(); // Llamamos al método logout del UserContext
    alert("Sesión cerrada con éxito");
    navigate('/'); // Redirigimos al usuario a la página principal después de cerrar sesión
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Pizzería Mamma Mía</h1> {/* Cambié el nombre de la pizzería */}
        <Link to="/">🏠 Home</Link>

        {token ? (
          <>
            <Link to="/Profile">👤 Profile</Link>
            <button onClick={handleLogout} className="btn-logout">🔓 Logout</button> {/* Botón de Logout */}
          </>
        ) : (
          <>
            <Link to="/Login">🔐 Login</Link>
            <Link to="/Register">🔏 Register</Link>
          </>
        )}
      </div>
      <div className="navbar-right">
        <Link to="/Cart">🛒 Total: ${totalPrice.toFixed(2)}</Link> {/* Mostrar el total del carrito */}
      </div>
    </nav>
  );
};

export default Navbar;



