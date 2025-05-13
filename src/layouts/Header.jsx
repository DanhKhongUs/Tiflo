import { faBars, faSearch, faTicket } from '@fortawesome/free-solid-svg-icons';
import { faBell, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import routes from '~/Routes/routes';
import { useAuth } from '~/hooks/useAuth';
import Button from '~/components/Button/Button';

function Header({ toggleSidebar }) {
    const { state } = useAuth();
    const currentUser = state.user;

    return (
        <header className="h-18 w-full flex justify-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 text-white shadow-lg">
            <div className="container mx-auto flex h-full items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center gap-8">
                    <button
                        onClick={toggleSidebar}
                        className="text-2xl text-gray-800 hover:text-gray-600 transition-colors duration-200 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <Link
                        className="flex items-center space-x-2 gap-1 transition-transform duration-300 hover:scale-105"
                        to={routes.dashboard}
                    >
                        <FontAwesomeIcon icon={faTicket} className="text-3xl text-gray-600" />
                        <span className="text-2xl font-extrabold tracking-tight text-gray-600">Tiflo</span>
                    </Link>
                </div>

                {/* Search */}
                <div className="flex-1 max-w-lg mx-6">
                    <div className="flex">
                        <input
                            className="w-[400px] min-w-72 overflow-hidden py-2 pl-6 flex items-center rounded-bl-full rounded-tl-full border-1 border-r-0 bg-white border-gray-300 text-black outline-none"
                            spellCheck={false}
                            type="text"
                            placeholder="Search Personal Finance Tracker..."
                        />
                        <button className="items-center right-3 w-14 h-100% bg-gray-100 text-xl text-gray-700 rounded-br-full rounded-tr-full border-1 border-gray-300 hover:bg-gray-200 cursor-pointer hover:text-gray-500 transition duration-300">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

                {/* Action */}
                <div className="flex items-center gap-3">
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Notification" placement="bottom">
                                <button className="bg-transparent text-gray-700 text-2xl px-3 py-1 cursor-pointer relative flex items-center justify-center">
                                    <FontAwesomeIcon icon={faBell} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className="bg-transparent text-gray-700 text-2xl px-3 py-1 cursor-pointer relative flex items-center justify-center">
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                            <div>
                                <FontAwesomeIcon
                                    className="bg-gray-500  text-white text-[1.2rem] rounded-full px-[9px] py-2 cursor-pointer relative flex items-center justify-center outline-none"
                                    icon={faUser}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="flex gap-4 px-2">
                            <Link to={routes.signin}>
                                <Button
                                    primary
                                    className="py-1.5 min-w-[100px] bg-[#02afae] text-white hover:bg-[#029896] transition pointer-events-auto"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to={routes.signup}>
                                <Button className="min-w-[100px] py-1.5 underline border border-[#02afae] text-[#02afae] hover:text-gray-600 transition pointer-events-auto">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
