import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes, privateRoutes } from './Routes'; // import các route công khai và riêng tư
import DefaultLayout from './layouts/DefaultLayouts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route công khai */}
                {publicRoutes.map((route, index) => {
                    const Page = route.component;

                    let Layout;
                    if (route.layout === null) {
                        Layout = Fragment;
                    } else {
                        Layout = route.layout || DefaultLayout;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {/* Route riêng tư */}
                {privateRoutes.map((route, index) => {
                    const Page = route.component;

                    let Layout;
                    if (route.layout === null) {
                        Layout = Fragment;
                    } else {
                        Layout = route.layout || DefaultLayout;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <PrivateRoute>
                                    <Layout>
                                        <Page />
                                    </Layout>
                                </PrivateRoute>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
