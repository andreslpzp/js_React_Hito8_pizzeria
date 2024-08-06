import React from 'react';
import '../src/assets/CSS/Header.css';

function Header() {
  return (
    <div className="header">
      <img className="header-image" src="../src/assets/img/fondo_restaurant.jpg" alt="Fondo" />
      <div className="header-content">
        <h1>El Noctámbulo del Huerto</h1>
      </div>
    </div>
  );
}

export default Header;