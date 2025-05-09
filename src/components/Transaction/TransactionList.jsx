import { useState } from 'react';
import TransactionForm from './TransactionForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const sampleData = [
    { name: 'Đi làm', type: 'Income', price: '1000' },
    { name: 'Kinh doanh', type: 'Income', price: '1500' },
    { name: 'Cho thuê máy móc', type: 'Income', price: '2000' },
    { name: 'Đi ăn', type: 'Expense', price: '300' },
    { name: 'Đi shopping', type: 'Expense', price: '700' },
];

function TransactionList() {
    const [showForm, setShowForm] = useState(false);
    const [transactions, setTransactions] = useState(sampleData);

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Danh sách */}
                <div className="bg-white rounded-xl p-4 shadow">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left text-gray-500 border-b border-gray-200">
                                <th className="py-2">Danh mục</th>
                                <th className="py-2">Thời gian</th>
                                <th className="py-2">Số tiền</th>
                                <th className="py-2">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index} className="border-b text-gray-700 border-gray-200">
                                    <td className="py-3 text-left whitespace-nowrap text-lg">{transaction.name}</td>
                                    <td className="py-3  text-left whitespace-nowrap text-sm">
                                        {new Date().toDateString().slice(4)}
                                    </td>
                                    <td className="py-3  text-left whitespace-nowrap font-semibold text-lg">
                                        <span
                                            className={
                                                transaction.type === 'Income' ? 'text-green-500' : 'text-red-500'
                                            }
                                        >
                                            {transaction.type === 'Income' ? '+' : '-'}${transaction.price}
                                        </span>
                                    </td>
                                    <td className="py-3 ">
                                        <div className="flex gap-2">
                                            <button className="bg-blue-500 hover:bg-blue-600  p-2 rounded text-white text-lg cursor-pointer">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-600 p-2 rounded text-white text-lg cursor-pointer">
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
                <div className="bg-blue-100 shadow-inner text-6xl text-gray-700 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faMoneyBillTransfer} />
                </div>
            </div>

            {showForm && (
                <div className="mt-8">
                    <TransactionForm
                        onSubmit={(transaction) => {
                            setTransactions([...transactions, transaction]);
                            setShowForm(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default TransactionList;
