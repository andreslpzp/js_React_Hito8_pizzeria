import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
        <h1>404 - Página No Encontrada</h1>
        <p>Parece que te has perdido...</p>
        <Link to="/">Volver al Inicio</Link>
        </div>
    );
}

export default NotFound;
