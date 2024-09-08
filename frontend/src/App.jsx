import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Pizza from "./Pages/Pizza";
import Profile from "./Pages/Profile";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import { CartProvider } from "./Context/CartContext";  // Importa el CartProvider

function App() {
  return (
    <CartProvider>  {/* Envuelve toda la aplicación dentro del CartProvider */}
      <Router>
        <div>
          <Navbar />  {/* Ya no es necesario pasar el prop total, lo obtendremos desde el Context */}
          <Routes>
            <Route path="/" element={<Home />} />  {/* No es necesario pasar addToCart como prop, lo usaremos desde el Context */}
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />  {/* No es necesario pasar cart o setCart como prop */}
            <Route path="/Pizza/:id" element={<Pizza />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;





