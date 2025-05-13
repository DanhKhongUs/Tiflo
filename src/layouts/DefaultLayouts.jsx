import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import routes from '~/Routes/routes';

function DefaultLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const location = useLocation();
    const isLandingPage = location.pathname === routes.landing;
    const isAuthPage = ['/signin', 'signup'].includes(location.pathname);

    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            {/* Header */}
            {!isAuthPage && (
                <div className={isLandingPage ? 'pointer-events-none' : ''}>
                    <Header toggleSidebar={toggleSidebar} />
                </div>
            )}

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                {!isAuthPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

                {/* Main Content */}
                <main
                    className={`flex-1 transition-all duration-300 overflow-y-auto ${isSidebarOpen ? 'ml-68' : 'ml-0'}`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DefaultLayout;
