import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShapes } from '@fortawesome/free-solid-svg-icons';

function CategoryForm({ onSubmit }) {
    const [type, setType] = useState('Expense');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    //Handle event
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCategory = { name, number, type };
        onSubmit?.(newCategory);
        setName('');
        setNumber('');
        setType('Expense');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-2xl">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl flex flex-col gap-4 shadow">
                <div className="flex bg-gray-200 rounded-lg overflow-hidden">
                    <button
                        type="button"
                        className={`flex-1 py-2 font-semibold cursor-pointer ${
                            type === 'Expense' ? 'bg-red-500 text-white' : 'text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setType('Expense')}
                    >
                        Chi phí
                    </button>
                    <button
                        type="button"
                        className={`flex-1 py-2 font-semibold cursor-pointer ${
                            type === 'Income' ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setType('Income')}
                    >
                        Thu nhập
                    </button>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm mb-1">Tên danh mục</label>
                    <input
                        type="text"
                        className="w-full text-[1.2rem] bg-gray-100 px-3 py-2 rounded text-gray-800 border border-gray-300 focus:outline-blue-400"
                        value={name}
                        placeholder="Nhập tên danh mục"
                        onChange={(e) => {
                            const nameValue = e.target.value;
                            if (!nameValue.startsWith(' ')) {
                                setName(nameValue);
                            }
                        }}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm mb-1">Biểu tượng</label>
                    <input
                        type="text"
                        className="w-full text-[1.2rem] bg-gray-100 px-3 py-2 rounded text-gray-800 border border-gray-300 focus:outline-blue-400"
                        value={number}
                        onChange={(e) => {
                            const numberValue = e.target.value;
                            if (!numberValue.startsWith(' ')) {
                                setNumber(numberValue);
                            }
                        }}
                        placeholder="Nhập số thứ tự"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold cursor-pointer"
                >
                    Tạo
                </button>
            </form>

            <div className="bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-6xl shadow-inner">
                {number || (
                    <span className="text-gray-500">
                        <FontAwesomeIcon icon={faShapes} />
                    </span>
                )}
            </div>
        </div>
    );
}

export default CategoryForm;
