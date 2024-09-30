import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext'; // Importa el UserContext
import { Navigate } from 'react-router-dom';

function Profile() {
  const { token, logout, getProfile } = useContext(UserContext); // Accede a getProfile y logout
  const [email, setEmail] = useState(''); // Estado local para guardar el email del usuario
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  // Redirigir si no hay token (usuario no autenticado)
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Obtener el perfil del usuario cuando se carga el componente
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile(); // Obtiene el perfil del usuario
        if (profile && profile.email) {
          setEmail(profile.email); // Actualiza el estado con el email del usuario
        }
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };
    fetchProfile();
  }, [getProfile]);

  // Mostrar un mensaje de carga mientras se obtiene el perfil
  if (loading) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      {email ? (
        <p>Email: {email}</p> // Muestra el email obtenido
      ) : (
        <p>No se pudo cargar el perfil del usuario.</p>
      )}
      <button onClick={logout}>Cerrar Sesión</button> {/* Llama a logout para cerrar sesión */}
    </div>
  );
}

export default Profile;



