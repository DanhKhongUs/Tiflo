import {
    faBars,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faSearch,
    faTicket,
} from '@fortawesome/free-solid-svg-icons';
import { faBell, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import routes from '~/Routes/routes';
import Menu from '~/components/Popper/Menu/menu';
import { useAuth } from '~/hooks/useAuth';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@danh',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
    },
];

function Header({ toggleSidebar }) {
    const navigate = useNavigate();
    const { state, dispatch } = useAuth();
    const currentUser = state.user;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle language
                break;
            case 'logout':
                dispatch({ type: 'LOGOUT' });
                localStorage.removeItem('currentUser'); // xoá khỏi localStorage
                navigate('/signin'); // điều hướng về trang đăng nhập
                break;
            default:
        }
    };

    return (
        <header className="h-16 w-full flex justify-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 text-white shadow-lg">
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
                        </>
                    ) : (
                        <Link to={routes.signin}>Log in</Link>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <FontAwesomeIcon
                                className="bg-gray-500 text-white text-[1.2rem] rounded-full px-2 py-2 cursor-pointer relative flex items-center justify-center outline-none"
                                icon={faUser}
                            />
                        ) : (
                            <button className="text-3xl ml-7 bg-transparent px-2 py-1 cursor-pointer">
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
