import routes from './routes';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Category from '~/pages/Category';
import Transaction from '~/pages/Transaction';
import Statistical from '~/pages/Statistical';
import Report from '~/pages/Report';
import Setting from '~/pages/Setting';
import PrivateRoute from '~/components/PrivateRoute/PrivateRoute';

const publicRoutes = [
    {
        path: routes.dashboard,
        component: () => (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
    },
    { path: routes.signin, component: SignIn, layout: null },
    { path: routes.signup, component: SignUp, layout: null },
];

const privateRoutes = [
    { path: routes.category, component: Category },
    { path: routes.transaction, component: Transaction },
    { path: routes.statistical, component: Statistical },
    { path: routes.report, component: Report },
    { path: routes.setting, component: Setting },
];

export { publicRoutes, privateRoutes };
