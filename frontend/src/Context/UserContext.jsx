import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null); // Obtiene el token desde localStorage si existe

  // Método para hacer login
  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);  // Guardar el token JWT
        localStorage.setItem('token', data.token); // Guardar el token en localStorage
      } else {
        console.error("Error en login:", data.message);
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  // Método para obtener el perfil del usuario
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/auth/me", { // Cambia la URL a /me
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Envía el token en el header
        },
      });
      if (!res.ok) {
        throw new Error('Error al obtener el perfil del usuario');
      }
      const data = await res.json();
      return data; // Retorna los datos del perfil
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      return null; // Devuelve null en caso de error
    }
  };

  // Método para hacer logout
  const logout = () => {
    setToken(null);  // Eliminar el token
    localStorage.removeItem('token'); // Eliminar el token de localStorage
  };

  return (
    <UserContext.Provider value={{ token, login, getProfile, logout }}>
      {children}
    </UserContext.Provider>
  );
}


