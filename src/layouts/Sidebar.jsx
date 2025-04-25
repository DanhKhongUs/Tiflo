import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faAnglesLeft,
    faArrowRightArrowLeft,
    faChartSimple,
    faFolderClosed,
    faGear,
    faHouse,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className="relative">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-40`}
            >
                {/* Header */}
                <div className="flex items-center p-4 border-b border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <FontAwesomeIcon
                            className="bg-blue-500 text-white text-[1.2rem] rounded-full px-2 py-2 cursor-pointer relative flex items-center justify-center outline-none"
                            icon={faUser}
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-semibold">Quản lý tài chính</p>
                        <p className="text-xs text-gray-400">Tiền Kim</p>
                    </div>
                    <button onClick={toggleSidebar} className="ml-auto text-gray-400">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </button>
                </div>

                {/* Menu Items */}
                <div className="p-4">
                    <p className="text-xs text-green-400 font-semibold mb-2">TỔNG QUAN</p>
                    <ul>
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                            <FontAwesomeIcon icon={faHouse} />
                            Trang chủ
                        </li>
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                            <FontAwesomeIcon icon={faFolderClosed} />
                            Danh mục
                        </li>
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                            Giao dịch
                        </li>
                    </ul>

                    <p className="text-xs text-green-400 font-semibold mt-4 mb-2">TIỀN ÍCH</p>
                    <ul>
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                            <FontAwesomeIcon icon={faChartSimple} />
                            Báo cáo
                        </li>
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                            <FontAwesomeIcon icon={faGear} />
                            Cài đặt
                        </li>
                        <li className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            Đăng xuất
                        </li>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>}
        </div>
    );
}

export default Sidebar;
