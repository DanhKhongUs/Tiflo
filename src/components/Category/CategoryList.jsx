import { useState } from 'react';
import CategoryForm from './CategoryForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faShapes, faTrash } from '@fortawesome/free-solid-svg-icons';

const sampleData = [
    { name: 'Đi làm', type: 'Income' },
    { name: 'Kinh doanh', type: 'Income' },
    { name: 'Cho thuê máy móc', type: 'Income' },
    { name: 'đi ăn', type: 'Expense' },
    { name: 'đi shopping', type: 'Expense' },
];

const CategoryList = () => {
    const [showForm, setShowForm] = useState(false);
    const [categories, setCategories] = useState(sampleData);

    return (
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl text-gray-800 font-bold">Danh mục</h1>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white text-xl px-4 py-2 rounded-xl font-semibold cursor-pointer"
                    onClick={() => setShowForm(!showForm)}
                >
                    + Danh mục mới
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Danh sách */}
                <div className="bg-white rounded-xl p-4 shadow">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500 border-b border-gray-200">
                                <th className="py-2">Danh mục</th>
                                <th className="py-2">Kiểu</th>
                                <th className="py-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((categorie, index) => (
                                <tr key={index} className="border-b text-gray-700 border-gray-200">
                                    <td className="py-2">
                                        {categorie.icon} {categorie.name}
                                    </td>
                                    <td className="py-2">
                                        <span
                                            className={`px-2 py-1 rounded text-sm font-semibold text-white ${
                                                categorie.type === 'Income' ? 'bg-green-500' : 'bg-red-500'
                                            }`}
                                        >
                                            {categorie.type}
                                        </span>
                                    </td>
                                    <td className="py-2">
                                        <div className="flex gap-2">
                                            <button className="bg-blue-500 p-2 text-white text-[1.1rem] rounded hover:bg-blue-600 cursor-pointer">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button className="bg-red-500 p-2 text-white text-[1.1rem] rounded hover:bg-red-600 cursor-pointer">
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-4 text-gray-600 text-sm flex justify-between items-center">
                        <div className="flex gap-1">
                            <button>{`<<`}</button>
                            <button>{`<`}</button>
                            <button className="bg-gray-300 px-2 rounded text-gray-800">1</button>
                            <button className="text-gray-700">2</button>
                            <button>{`>`}</button>
                            <button>{`>>`}</button>
                        </div>
                        <div>1 of 2 pages (10 items)</div>
                    </div>
                </div>

                {/* Biểu tượng */}
                <div className="bg-blue-100 shadow-inner text-6xl text-blue-600 rounded-xl flex items-center justify-center">
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
