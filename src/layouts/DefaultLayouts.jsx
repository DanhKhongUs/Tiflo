import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="h-screen flex flex-col overflow-hidden">
            {/* Header */}
            <Header toggleSidebar={toggleSidebar} />

            {/* Body */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <div
                    className={`flex-1 transition-all duration-300 overflow-y-auto p-6 ${
                        isSidebarOpen ? 'ml-68' : 'ml-0'
                    }`}
                >
                    {/* Children hoặc nội dung chính */}
                    <div className="text-3xl font-bold">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
