import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

function ProtectedRoute({ children }) {
    const { token } = useContext(UserContext);

    if (!token) {
    return <Navigate to="/Login" />;
    }

    return children;
}

export default ProtectedRoute;
