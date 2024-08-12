import React from 'react';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
// import Home from './Home'; 
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Register />
      <Login />
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;