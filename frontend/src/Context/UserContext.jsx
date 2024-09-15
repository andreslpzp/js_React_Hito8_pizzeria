import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);  // Por defecto en true

  const logout = () => {
    setToken(false);  // Cambia el token a false
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};
