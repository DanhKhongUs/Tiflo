import routes from './routes';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

const publicRoutes = [
    { path: routes.dashboard, component: Dashboard },
    { path: routes.signin, component: SignIn },
    { path: routes.signup, component: SignUp },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
