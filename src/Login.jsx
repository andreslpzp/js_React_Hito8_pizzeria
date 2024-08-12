import React, { useState } from 'react';
import '../src/assets/CSS/Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [message, setMessage] = useState('');

let handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
        setMessage= alert('Todos los campos son obligatorios.');
        return;
    }

    if (password.length < 6) {
        setMessage= alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    setMessage= alert('Inicio de sesión exitoso!');
};

return (
    <div className="container mt-5">
        <h1 className='text-center mb-1'>Bienvenido </h1>
        <p className='text-center mb-5'>Ingresa tu correo y contraseña</p>
        <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
            <div className="card-body">
                <h2 className="card-title text-center fs-3">Inicio de Sesión</h2>
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
                    <button type="submit" className="btn btn-outline-warning mt-3 fw-bold">Iniciar Sesión</button>
                </div>
                
                    </form>
                    {message && <p className="mt-3 text-center">{message}</p>}
                </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Login;