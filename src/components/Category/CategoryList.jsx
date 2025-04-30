import { useState } from 'react';
import CategoryForm from './CategoryForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faShapes, faTrash } from '@fortawesome/free-solid-svg-icons';

const sampleData = [
    { icon: '🧑‍💼', name: 'Đi làm', type: 'Income' },
    { icon: '🤝', name: 'Kinh doanh', type: 'Income' },
    { icon: '😗', name: 'Cho thuê máy móc', type: 'Income' },
    { icon: '😋', name: 'đi ăn', type: 'Expense' },
    { icon: '😁', name: 'đi shopping', type: 'Expense' },
];

const CategoryList = () => {
    const [showForm, setShowForm] = useState(false);
    const [categories, setCategories] = useState(sampleData);

    return (
        <div className=" bg-white rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl text-gray-800 font-bold">Danh mục</h1>
                    <div className="text-sm text-gray-800 mt-1"> </div>
                </div>
                <button
                    className="bg-green-600 hover:bg-green-700 text-white text-2xl px-4 py-2 rounded font-semibold cursor-pointer"
                    onClick={() => setShowForm(!showForm)}
                >
                    + Danh mục mới
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Danh sách */}
                <div className="bg-gray-800 rounded-xl p-4">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-400 border-b border-gray-700">
                                <th className="py-2">Danh mục</th>
                                <th className="py-2">Kiểu</th>
                                <th className="py-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((cat, index) => (
                                <tr key={index} className="border-b text-gray-200 border-gray-700">
                                    <td className="py-2">
                                        {cat.icon} {cat.name}
                                    </td>
                                    <td className="py-2">
                                        <span
                                            className={`px-2 py-1 rounded text-xs font-semibold ${
                                                cat.type === 'Income' ? 'bg-green-600' : 'bg-red-600'
                                            }`}
                                        >
                                            {cat.type}
                                        </span>
                                    </td>
                                    <td className="py-2">
                                        <div className="flex gap-2">
                                            <button className="bg-green-600 p-2 text-[1rem] rounded hover:bg-green-700 cursor-pointer">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button className="bg-green-600 p-2 text-[1rem] rounded hover:bg-green-700 cursor-pointer">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-4 text-gray-200 text-sm flex justify-between items-center">
                        <div className="flex gap-1">
                            <button>{`<<`}</button>
                            <button>{`<`}</button>
                            <button className="bg-gray-700 px-2 rounded">1</button>
                            <button>2</button>
                            <button>{`>`}</button>
                            <button>{`>>`}</button>
                        </div>
                        <div>1 of 2 pages (10 items)</div>
                    </div>
                </div>

                <div className="bg-gray-500 shadow-lg text-6xl text-gray-800 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faShapes} />
                </div>
            </div>

            {showForm && (
                <div className="mt-8">
                    <CategoryForm
                        onSubmit={(category) => {
                            setCategories([...categories, category]);
                            setShowForm(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default CategoryList;
