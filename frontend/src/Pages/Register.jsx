import React, { useState, useContext } from 'react';
import { UserContext } from '../Context/UserContext'; // Importa el UserContext
import { Navigate } from 'react-router-dom';
import '../assets/CSS/Login.css'; 

const Register = () => {
    const { token, register } = useContext(UserContext); // Accede al método register del UserContext
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Redirigir si ya se está autenticado
    if (token) {
        return <Navigate to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Reinicia el mensaje de error

        if (!email || !password) {
            setErrorMessage('Todos los campos son obligatorios.');
            return;
        }

        if (password.length < 6) {
            setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        setLoading(true); // Inicia el estado de carga

        try {
            await register(email, password);
            // Aquí podrías redirigir a otra página si lo deseas
        } catch (error) {
            setErrorMessage('Error al registrarse. Intenta nuevamente.');
            console.error(error); // Para depuración
        } finally {
            setLoading(false); // Finaliza el estado de carga
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h2>Registrarse</h2>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Contraseña:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='text-center'>
                            <button 
                                type="submit" 
                                className="btn btn-outline-warning mt-3 fw-bold" 
                                disabled={loading}
                            >
                                {loading ? 'Cargando...' : 'Registrarme'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

