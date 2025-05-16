import { Navigate } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';
import routes from '~/Routes/routes';

function PrivateRoute({ children }) {
    const { state, loading } = useAuth();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!state.user) {
        return <Navigate to={routes.landing} />;
    }

    return children;
}

export default PrivateRoute;
