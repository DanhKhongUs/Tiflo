import { useState } from 'react';
import CategoryForm from './CategoryForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faShapes, faTrash } from '@fortawesome/free-solid-svg-icons';

function CategoryList() {
    const [showForm, setShowForm] = useState(false);
    const [categories, setCategories] = useState(() => {
        try {
            const storageCat = JSON.parse(localStorage.getItem('categories')) || [];
            return storageCat;
        } catch (error) {
            console.log('Failed to load category from localStorage', error);
            return [];
        }
    });

    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    //Handle event
    const handleDelete = (index) => {
        const deleteItem = categories.filter((_, i) => i !== index);
        setCategories(deleteItem);
        localStorage.setItem('categories', JSON.stringify(deleteItem));
    };

    const handleEdit = (index) => {
        const category = categories[index];
        if (!category) {
            console.error(`Không tìm thấy danh mục tại index ${index}`);
            return;
        }

        setEditIndex(index);
        setEditText(category.name);
    };

    const handleSave = (index) => {
        if (editIndex === null || !editText.trim()) return;

        const updated = [...categories];
        updated[index].name = editText;
        setCategories(updated);
        localStorage.setItem('categories', JSON.stringify(updated));
        setEditIndex(null);
        setEditText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSave();
    };

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

            <div className="flex flex-col md:flex-row gap-6">
                {/* Danh sách */}
                <div className="bg-white rounded-xl p-4 shadow w-full md:w-1/2 min-w-[300px] max-w-full space-y-3 max-h-120 overflow-y-auto">
                    <table className="w-full text-sm table-fixed">
                        <thead>
                            <tr className="text-left text-gray-500 border-b border-gray-200">
                                <th className="py-2 w-2/5">Danh mục</th>
                                <th className="py-2 px-4 w-1/5">Kiểu</th>
                                <th className="py-2 px-18 w-2/5">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((category, index) => (
                                <tr key={index} className="border-b text-[1.1rem] text-gray-700 border-gray-200">
                                    <td className="py-2 truncate">
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={editText}
                                                onChange={(e) => setEditText(e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                className="w-full outline-none bg-gray-100 text-gray-700 border border-gray-500 p-2 rounded box-border"
                                            />
                                        ) : (
                                            <span className="truncate">{category.name}</span>
                                        )}
                                    </td>
                                    <td className="py-2 px-4 truncate">
                                        <span
                                            className={`px-2 py-1 rounded text-sm font-semibold text-white ${
                                                category.type === 'Income' ? 'bg-green-500' : 'bg-red-500'
                                            }`}
                                        >
                                            {category.type}
                                        </span>
                                    </td>
                                    <td className="py-2 px-18">
                                        <div className="flex gap-2 justify-start">
                                            {editIndex === index ? (
                                                <button
                                                    className="bg-blue-500 p-2 text-white text-[1.1rem] rounded hover:bg-blue-600 cursor-pointer"
                                                    onClick={() => handleSave(index)}
                                                >
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => handleEdit(index)}
                                                    className="bg-blue-500 p-2 text-white text-[1.1rem] rounded hover:bg-blue-600 cursor-pointer"
                                                >
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                </button>
                                            )}
                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="bg-red-500 p-2 text-white text-[1.1rem] rounded hover:bg-red-600 cursor-pointer"
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Biểu tượng */}
                <div className="bg-blue-100 shadow-inner text-6xl text-blue-600 rounded-xl flex items-center justify-center w-full md:w-1/2 min-w-[300px] max-w-full">
                    <FontAwesomeIcon icon={faShapes} />
                </div>
            </div>

            {showForm && (
                <div className="mt-8">
                    <CategoryForm
                        onSubmit={(category) => {
                            const newList = [...categories, category];
                            setCategories(newList);
                            localStorage.setItem('categories', JSON.stringify(newList));
                            setShowForm(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default CategoryList;
