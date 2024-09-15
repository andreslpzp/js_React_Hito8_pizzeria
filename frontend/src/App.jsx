import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { UserProvider, UserContext } from "./Context/UserContext";  // Importa el UserProvider y UserContext
import { useContext } from 'react';

// Componente de Ruta Protegida
const ProtectedRoute = ({ element }) => {
  const { token } = useContext(UserContext);

  // Si el token es false, redirige a Login
  return token ? element : <Navigate to="/Login" />;
};

function App() {
  const { token } = useContext(UserContext);

  return (
    <UserProvider>  {/* Envuelve toda la aplicación dentro del UserProvider */}
      <CartProvider>  {/* Envuelve toda la aplicación dentro del CartProvider */}
        <Router>
          <div>
            <Navbar />  {/* Navbar usará el UserContext */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Register" element={token ? <Navigate to="/" /> : <Register />} /> {/* Redirige si está autenticado */}
              <Route path="/Login" element={token ? <Navigate to="/" /> : <Login />} /> {/* Redirige si está autenticado */}
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Pizza/:id" element={<Pizza />} />
              <Route path="/Profile" element={<ProtectedRoute element={<Profile />} />} /> {/* Ruta protegida */}
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







