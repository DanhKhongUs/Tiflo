import { faBars, faSearch, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import routes from '~/Routes/routes';

function Header() {
    return (
        <header className="h-16 w-full flex justify-center bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white shadow-lg">
            <div className="container mx-auto flex h-full items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center gap-8">
                    <button className="text-2xl hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Link
                        className="flex items-center space-x-2 gap-2 transition-transform duration-300 hover:scale-105"
                        to={routes.dashboard}
                    >
                        <FontAwesomeIcon icon={faTicket} className="text-3xl text-gray-300" />
                        <span className="text-2xl font-extrabold tracking-tight text-gray-300">Tiflo</span>
                    </Link>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-lg mx-6">
                    <div className="relative">
                        <input
                            className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300"
                            type="text"
                            placeholder="Search Personal Finance Tracker..."
                        />
                        <button className="absolute right-3">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
