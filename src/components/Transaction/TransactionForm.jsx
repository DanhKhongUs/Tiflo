import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

function TransactionForm({ onSubmit }) {
    const [transaction, setTransaction] = useState('');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');
    const [date, setDate] = useState(new Date().toISOString());
    const [type, setType] = useState('Expense');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            type,
            date,
            name: transaction,
            price: amount,
            note,
        };

        onSubmit?.(newTransaction);
        setTransaction('');
        setAmount('');
        setNote('');
        setDate(new Date());
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
                    <label className="block text-gray-600 text-sm mb-1">Thời gian</label>
                    <input
                        type="text"
                        value={new Date().toDateString().slice(4)}
                        readOnly
                        className="w-full text-[1.2rem] bg-gray-100 px-3 py-2 rounded text-gray-800 border border-gray-300 focus:outline-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm mb-1">Danh mục</label>
                    <input
                        type="text"
                        placeholder="Nhập danh mục"
                        value={transaction}
                        onChange={(e) => setTransaction(e.target.value)}
                        className="w-full text-[1.2rem] px-2 py-2 bg-gray-100 text-gray-800 focus:outline-blue-400"
                    />
                </div>

                <div>
                    <label className="block text-gray-600 text-sm mb-1">Số tiền</label>
                    <div className="flex items-center border border-gray-300 rounded bg-gray-100">
                        <span className="px-3 text-gray-500">$</span>
                        <input
                            type="text"
                            min="0"
                            placeholder="Nhập số tiền"
                            value={amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value) || '')}
                            className="w-full text-[1.2rem] px-2 py-2 bg-gray-100 text-gray-800 focus:outline-blue-400"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-gray-600 text-sm mb-1">Ghi chú</label>
                    <textarea
                        className="w-full text-[1.2rem] bg-gray-100 px-3 py-2 rounded text-gray-800 border border-gray-300 focus:outline-blue-400"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Nhập ghi chú"
                        rows={2}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold cursor-pointer"
                >
                    Tạo
                </button>
            </form>

            <div className="bg-blue-100 shadow-inner text-6xl text-gray-700 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
            </div>
        </div>
    );
}

export default TransactionForm;
