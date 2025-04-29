import routes from './routes';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Category from '~/pages/Category';
import Statistical from '~/pages/Statistical';
import Report from '~/pages/Report';
import Setting from '~/pages/Setting';

const publicRoutes = [
    { path: routes.dashboard, component: Dashboard },
    { path: routes.signin, component: SignIn },
    { path: routes.signup, component: SignUp },
    { path: routes.category, component: Category },
    { path: routes.statistical, component: Statistical },
    { path: routes.report, component: Report },
    { path: routes.setting, component: Setting },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
