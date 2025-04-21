import Header from './Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <div className="w-full flex">
                <Sidebar />
                <div className="flex-1 text-3xl font-bold">Home pages</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
