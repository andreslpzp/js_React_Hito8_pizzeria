import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/Navbar.css';

const Navbar = ({ total = 0 }) => {
  const token = false;
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Pizzería Mamma Mia!</h1>
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
        <Link to="/Cart">🛒 Total: ${total.toLocaleString()}</Link>
      </div>
    </nav>
  );
}

export default Navbar;