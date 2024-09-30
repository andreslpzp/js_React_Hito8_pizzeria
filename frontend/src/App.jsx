import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Pizza from "./Pages/Pizza"; // Asegúrate de importar correctamente el componente
import Profile from "./Pages/Profile";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import { CartProvider } from "./Context/CartContext";
import { UserProvider, UserContext } from "./Context/UserContext";
import { useContext } from 'react';

// Componente de Ruta Protegida
const ProtectedRoute = ({ element }) => {
  const { token } = useContext(UserContext);

  // Si el token es false, redirige a Login
  return token ? element : <Navigate to="/Login" />;
};

// Componente para rutas de Login y Registro (redirigir si el usuario ya está autenticado)
const AuthRoute = ({ element }) => {
  const { token } = useContext(UserContext);

  // Si el token es true, redirige a Home
  return token ? <Navigate to="/" /> : element;
};

function App() {
  return (
    <UserProvider>  {/* Envuelve toda la aplicación dentro del UserProvider */}
      <CartProvider>  {/* Envuelve toda la aplicación dentro del CartProvider */}
        <Router>
          <div>
            <Navbar />  {/* Navbar usará el UserContext */}
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Si el usuario está autenticado, redirige a Home */}
              <Route path="/Register" element={<AuthRoute element={<Register />} />} />
              <Route path="/Login" element={<AuthRoute element={<Login />} />} />

              {/* Ruta de carrito */}
              <Route path="/Cart" element={<Cart />} />

              {/* Ruta para Pizza con el ID dinámico */}
              <Route path="/Pizza/:id" element={<Pizza />} />

              {/* Ruta protegida para el perfil */}
              <Route path="/Profile" element={<ProtectedRoute element={<Profile />} />} />

              {/* Página 404 */}
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








