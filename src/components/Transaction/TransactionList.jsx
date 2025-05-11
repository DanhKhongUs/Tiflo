import { useState } from 'react';
import TransactionForm from './TransactionForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faMoneyBillTransfer, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function TransactionList() {
    const [showForm, setShowForm] = useState(false);
    const [transactions, setTransactions] = useState(() => {
        try {
            const storageTran = JSON.parse(localStorage.getItem('transactions')) || [];
            return storageTran;
        } catch (error) {
            console.log('Failed to load transaction from localStorage', error);
            return [];
        }
    });

    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');
    const [editPrice, setEditPrice] = useState('');

    //Handle event
    const handleDelete = (index) => {
        const deleteItem = transactions.filter((_, i) => i !== index);
        setTransactions(deleteItem);
        localStorage.setItem('transactions', JSON.stringify(deleteItem));
    };

    const handleEdit = (index) => {
        const transaction = transactions[index];
        if (!transaction) {
            console.error(`Không tìm thấy danh mục tại index ${index}`);
            return;
        }

        setEditIndex(index);
        setEditText(transaction.name);
        setEditPrice(transaction.price.toString());
    };

    const handleSave = (index) => {
        if (editIndex === null || !editText.trim() || isNaN(parseFloat(editPrice))) return;

        const updated = [...transactions];
        updated[index].name = editText;
        updated[index].price = parseFloat(editPrice);

        setTransactions(updated);
        localStorage.setItem('transactions', JSON.stringify(updated));

        setEditIndex(null);
        setEditText('');
        setEditPrice('');
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter') handleSave(index);
    };

    return (
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl text-gray-800 font-bold">Giao Dịch</h1>
                <button
                    className="bg-green-500 hover:bg-green-600 text-white text-xl px-4 py-2 rounded-xl font-semibold cursor-pointer"
                    onClick={() => setShowForm(!showForm)}
                >
                    + Giao dịch mới
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Danh sách */}
                <div className="bg-white rounded-xl p-4 shadow w-full md:w-1/2 min-w-[300px] max-w-full space-y-3 max-h-120 overflow-y-auto">
                    <table className="w-full text-sm table-fixed">
                        <thead>
                            <tr className="text-left text-gray-500 border-b border-gray-200">
                                <th className="py-2">Danh mục</th>
                                <th className="py-2 px-6">Thời gian</th>
                                <th className="py-2 px-4">Số tiền</th>
                                <th className="py-2 px-4">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
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
                                            <span className="truncate">{transaction.name}</span>
                                        )}
                                    </td>
                                    <td className="py-2 text-sm px-6 truncate">{new Date().toDateString().slice(4)}</td>
                                    <td className="py-2 px-4 truncate font-semibold text-[1.1rem]">
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={editPrice}
                                                onChange={(e) => setEditPrice(e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(e, index)}
                                                className="w-28 outline-none bg-gray-100 text-gray-700 border border-gray-500 p-2 rounded box-border"
                                            />
                                        ) : (
                                            <span
                                                className={
                                                    transaction.type === 'Income' ? 'text-green-500' : 'text-red-500'
                                                }
                                            >
                                                {transaction.type === 'Income' ? '+' : '-'}${transaction.price}
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-2 px-4 truncate">
                                        <div className="flex gap-2">
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
                                                className="bg-red-500 hover:bg-red-600 p-2 rounded text-white text-lg cursor-pointer"
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
                <div className="bg-blue-100 shadow-inner text-6xl text-gray-700 rounded-xl flex items-center justify-center w-full md:w-1/2 min-w-[300px] max-w-full">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} />
                </div>
            </div>

            {showForm && (
                <div className="mt-8">
                    <TransactionForm
                        onSubmit={(transaction) => {
                            const newList = [...transactions, transaction];
                            setTransactions(newList);
                            localStorage.setItem('transactions', JSON.stringify(newList));
                            setShowForm(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default TransactionList;
