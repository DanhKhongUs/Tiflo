import { Navigate } from 'react-router-dom';
import { useAuth } from '~/hooks/useAuth';
import routes from '~/Routes/routes';

function PrivateRoute({ children }) {
    const { state } = useAuth();

    if (!state.user) {
        return <Navigate to={routes.landing} />;
    }

    return children;
}

export default PrivateRoute;
