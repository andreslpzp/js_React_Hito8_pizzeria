import React from 'react';
import '../src/assets/CSS/Navbar.css';

const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <button>🏠 Home</button>
          {token ? (
            <>
              <button>🔓 Profile</button>
              <button>🔒 Logout</button>
            </>
          ) : (
            <>
              <button>🔐 Login</button>
              <button>🔐 Register</button>
            </>
          )}
        </div>
        <div className="navbar-right">
          <button>🛒 Total: ${total.toLocaleString()}</button>
        </div>
      </nav>
    );
}
  
  export default Navbar;