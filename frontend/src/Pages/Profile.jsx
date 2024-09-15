import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext'; // Asegúrate de importar el contexto
import { Navigate } from 'react-router-dom';

function Profile() {
    const { token } = useContext(UserContext);

    // Redirigir si el token es false
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Perfil del Usuario</h1>
            <p>Email: usuario@example.com</p>
            <button>Cerrar Sesión</button>
        </div>
    );
}

export default Profile;
