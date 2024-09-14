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
import { UserProvider } from "./Context/UserContext";  // Importa el UserProvider

function App() {
  return (
    <UserProvider>  {/* Envuelve toda la aplicación dentro del UserProvider */}
      <CartProvider>  {/* Envuelve toda la aplicación dentro del CartProvider */}
        <Router>
          <div>
            <Navbar />  {/* Navbar usará el UserContext */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Pizza/:id" element={<Pizza />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;






