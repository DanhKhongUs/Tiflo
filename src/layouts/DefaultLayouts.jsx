import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function DefaultLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const location = useLocation();
    const isAuthPage = ['/signin', 'signup'].includes(location.pathname);

    return (
        <div className="min-h-screen flex flex-col overflow-hidden">
            {/* Header */}
            {!isAuthPage && <Header toggleSidebar={toggleSidebar} />}

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                {!isAuthPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

                {/* Main Content */}
                <main
                    className={`flex-1 transition-all duration-300 overflow-y-auto p-6 ${
                        isSidebarOpen ? 'ml-68' : 'ml-0'
                    }`}
                >
                    {children}
                </main>
            </div>

            {/* Footer */}
            {!isAuthPage && <Footer className="mt-auto" />}
        </div>
    );
}

export default DefaultLayout;
