import {
    faBars,
    faBell,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faMessage,
    faSearch,
    faSignOut,
    faTicket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import routes from '~/Routes/routes';
import Menu from '~/components/Popper/Menu/menu';

const currentUser = true;

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
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        separate: true,
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle language
                break;
            default:
        }
    };

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
                    <div className="flex">
                        <input
                            className="w-[400px] min-w-72 overflow-hidden py-2 pl-6 flex items-center rounded-bl-full rounded-tl-full bg-gray-800 border-r border-gray-700 text-white outline-none"
                            spellCheck={false}
                            type="text"
                            placeholder="Search Personal Finance Tracker..."
                        />
                        <button className="items-center right-3 w-14 h-100% bg-gray-800 text-xl rounded-br-full rounded-tr-full hover:bg-[#1a2331] cursor-pointer hover:text-gray-300 transition duration-300">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

                {/* Action */}
                <div className="flex items-center">
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Notification" placement="bottom">
                                <button className="bg-transparent text-2xl px-3 py-1 cursor-pointer relative flex items-center justify-center">
                                    <FontAwesomeIcon icon={faBell} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className="bg-transparent text-2xl px-3 py-1 cursor-pointer relative flex items-center justify-center">
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <button>Log in</button>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <FontAwesomeIcon
                                className="bg-transparent text-2xl px-3 py-1 cursor-pointer relative flex items-center justify-center outline-none"
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
