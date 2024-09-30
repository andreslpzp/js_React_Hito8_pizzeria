import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);  // Inicialmente null hasta que se autentique
  const [email, setEmail] = useState(null);  // Estado para almacenar el email del usuario

  // Método para hacer login
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/login", { // Cambiado a puerto 5001
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);  // Guardar el token JWT
        setEmail(data.email);  // Guardar el email del usuario
        localStorage.setItem('token', data.token); // Opcional: almacenar el token en localStorage
      } else {
        console.error("Error en login:", data.message);
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  // Método para hacer registro
  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/register", { // Cambiado a puerto 5001
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);  // Guardar el token JWT
        setEmail(data.email);  // Guardar el email del usuario
        localStorage.setItem('token', data.token); // Opcional: almacenar el token en localStorage
      } else {
        console.error("Error en registro:", data.message);
      }
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  // Método para hacer logout
  const logout = () => {
    setToken(null);  // Eliminar el token al hacer logout
    setEmail(null);  // Eliminar el email al hacer logout
    localStorage.removeItem('token'); // Opcional: eliminar el token del localStorage
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

