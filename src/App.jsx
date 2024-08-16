import React from 'react';
import Navbar from './Navbar';
// import Register from './Register';
// import Login from './Login';
import Home from './Home';
import Cart from './Cart'; 
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Register /> */}
      {/* <Login /> */}
      <Home />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;