import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/Navbar.css';
import { CartContext } from '../Context/CartContext';

const Navbar = () => {
  const { totalPrice } = useContext(CartContext);
  const token = false; // Ajusta según tu lógica de autenticación
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Pizzería Napoli</h1>
        <Link to="/">🏠 Home</Link>
        {token ? (
          <>
            <Link to="/Profile">🔓 Profile</Link>
            <button onClick={handleLogout}>🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/Login">🔐 Login</Link>
            <Link to="/Register">🔐 Register</Link>
          </>
        )}
      </div>
      <div className="navbar-right">
        <Link to="/Cart">🛒 Total: ${totalPrice.toFixed(2)}</Link>
      </div>
    </nav>
  );
};

export default Navbar;

