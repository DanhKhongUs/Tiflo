import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

function SettingsPage() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'vi';
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const handleSendFeedback = () => {
        alert('Chức năng Gửi phản hồi sẽ được cập nhật sau.');
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-12 border border-gray-200">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Cài đặt</h1>
            </div>

            {/* Dark Mode */}
            <div className="mb-8 px-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Chế độ tối</h3>
                <label className="inline-flex items-center cursor-pointer">
                    <span className="mr-3 text-gray-700 ">Tắt</span>
                    <div className="relative">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            className="sr-only peer"
                        />
                        {/* Track */}
                        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition-colors duration-300"></div>

                        {/* Dot */}
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5 shadow-md"></div>
                    </div>
                    <span className="ml-3 text-gray-700 ">Bật</span>
                </label>
            </div>

            {/* Language */}
            <div className="mb-8 px-4 pt-6 border-t border-gray-300">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">Ngôn ngữ</h3>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="mt-1 p-2 w-full rounded-lg border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    <option value="vi">Tiếng Việt</option>
                    <option value="en">English</option>
                </select>
            </div>

            {/* Feedback & Help */}
            <div className="mb-8 px-4 pt-6 border-t border-gray-300">
                <h2 className="font-semibold text-lg mb-2 text-gray-800">Phản hồi & Trợ giúp</h2>
                <button
                    onClick={handleSendFeedback}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition cursor-pointer"
                >
                    Gửi phản hồi
                </button>
            </div>

            {/* Keyboard Shortcuts */}
            <div className="mb-8 px-4 pt-6 border-t border-gray-300">
                <h2 className="font-semibold text-lg mb-2 text-gray-800">Phím tắt</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>
                        <kbd className="bg-gray-200 px-2 py-1 rounded">Ctrl</kbd> +{' '}
                        <kbd className="bg-gray-200 px-2 py-1 rounded">S</kbd> — Lưu giao dịch
                    </li>
                    <li>
                        <kbd className="bg-gray-200 px-2 py-1 rounded">Ctrl</kbd> +{' '}
                        <kbd className="bg-gray-200 px-2 py-1 rounded">N</kbd> — Tạo mới
                    </li>
                    <li>
                        <kbd className="bg-gray-200 px-2 py-1 rounded">Esc</kbd> — Đóng popup
                    </li>
                </ul>
            </div>

            <div className="px-4 pt-6 border-t border-gray-300">
                <h2 className="font-semibold text-lg mb-2 text-gray-800">Quảng cáo</h2>
                <p className="text-gray-700 mb-8">Quản lý quảng cáo bạn nhìn thấy</p>

                <div className="space-y-4">
                    <div className="flex items-start justify-between p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div>
                            <h3 className="font-semibold text-gray-700">Quản lý chủ đề quảng cáo</h3>
                            <p className="text-gray-600 text-sm">
                                Thay đổi các yếu tố dùng để điều chỉnh quảng cáo hiển thị cho bạn.
                            </p>
                        </div>
                        <span className="text-gray-400 text-xl mt-2">
                            <FontAwesomeIcon icon={faCircleChevronRight} />
                        </span>
                    </div>

                    <div className="flex items-start justify-between p-4  rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div>
                            <h3 className="font-semibold text-gray-700">Tắt quảng cáo từ nhà quảng cáo</h3>
                            <p className="text-gray-600 text-sm">
                                Tắt quảng cáo từ nhà quảng cáo cụ thể đã hiển thị quảng cáo cho bạn gần đây.
                            </p>
                        </div>
                        <span className="text-gray-400 text-xl mt-2">
                            <FontAwesomeIcon icon={faCircleChevronRight} />
                        </span>
                    </div>

                    <div className="flex items-start justify-between p-4  rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div>
                            <h3 className="font-semibold text-gray-700">Chỉnh sửa thông tin cá nhân</h3>
                            <p className="text-gray-600 text-sm">
                                Chọn giới tính có thể được sử dụng để cá nhân hóa các quảng cáo hiển thị cho bạn.
                            </p>
                        </div>
                        <span className="text-gray-400 text-xl mt-2">
                            <FontAwesomeIcon icon={faCircleChevronRight} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;
