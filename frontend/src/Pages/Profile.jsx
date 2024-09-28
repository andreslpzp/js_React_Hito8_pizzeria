import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext'; // Importa el UserContext
import { Navigate } from 'react-router-dom';

function Profile() {
    const { token, logout, getProfile } = useContext(UserContext); // Accede al método getProfile y logout del contexto
    const [email, setEmail] = useState(''); // Estado local para guardar el email del usuario

    // Redirigir si no hay token (usuario no autenticado)
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Obtener el perfil del usuario cuando se carga el componente
    useEffect(() => {
        const fetchProfile = async () => {
            const profile = await getProfile(); // Obtiene el perfil del usuario desde el contexto
            if (profile && profile.email) {
                setEmail(profile.email); // Actualiza el estado con el email del usuario
            }
        };
        fetchProfile();
    }, [getProfile]); // Dependencia para ejecutar el efecto cuando getProfile cambie

    return (
        <div>
            <h1>Perfil del Usuario</h1>
            <p>Email: {email}</p> {/* Muestra el email obtenido */}
            <button onClick={logout}>Cerrar Sesión</button> {/* Llama a logout para cerrar sesión */}
        </div>
    );
}

export default Profile;

