import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
// import Register from './Register';
// import Login from './Login';
// import Cart from './Cart';
import Pizza from './Pizza';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;