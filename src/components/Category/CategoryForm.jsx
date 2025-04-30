import { useState } from 'react';

const CategoryForm = ({ onSubmit }) => {
    const [type, setType] = useState('Expense');
    const [name, setName] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCategory = { name, icon, type };
        onSubmit?.(newCategory);
        setName('');
        setIcon('');
        setType('Expense');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-2xl">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl flex flex-col gap-4">
                <div className="flex bg-gray-700 rounded-lg overflow-hidden">
                    <button
                        type="button"
                        className={`flex-1 py-2 font-semibold ${
                            type === 'Expense' ? 'bg-white text-black' : 'text-white'
                        }`}
                        onClick={() => setType('Expense')}
                    >
                        Chi phí
                    </button>
                    <button
                        type="button"
                        className={`flex-1 py-2 font-semibold ${
                            type === 'Income' ? 'bg-white text-black' : 'text-white'
                        }`}
                        onClick={() => setType('Income')}
                    >
                        Thu nhập
                    </button>
                </div>
                <div>
                    <label className="block text-gray-300 text-sm mb-1">Tên danh mục</label>
                    <input
                        type="text"
                        className="w-full text-[1.2rem] bg-gray-700 px-3 py-2 rounded text-white"
                        value={name}
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-300 text-sm mb-1">Biểu tượng</label>
                    <input
                        type="text"
                        className="w-full text-[1.2rem] bg-gray-700 px-3 py-3 rounded text-white"
                        value={icon}
                        onChange={(e) => setIcon(e.target.value)}
                        placeholder="Enter icon"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold"
                >
                    Tạo
                </button>
            </form>

            <div className="bg-gray-500 text-gray-800 rounded-xl flex items-center justify-center text-6xl">
                {icon || <span className="text-gray-500">⬜️</span>}
            </div>
        </div>
    );
};

export default CategoryForm;
