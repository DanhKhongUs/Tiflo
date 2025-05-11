import { useEffect, useState } from 'react';

function RecentTransactions() {
    const [recentTransactions, setRecentTransactions] = useState([]);

    useEffect(() => {
        try {
            const getStorage = JSON.parse(localStorage.getItem('transactions')) || [];
            const recent = getStorage.slice().reverse().slice(0, 5);
            setRecentTransactions(recent);
        } catch (error) {
            console.error('Lỗi khi đọc localStorage:', error);
        }
    }, []);

    return (
        <div className="mt-8 bg-gray-100 rounded-2xl p-4 shadow-md text-gray-800">
            <h2 className="text-3xl text-gray-800 font-bold py-4 mb-4">🧾 Giao dịch gần đây</h2>
            <ul className="bg-white rounded-xl p-4 shadow w-full">
                {recentTransactions.length === 0 ? (
                    <p className="text-gray-500">Không có giao dịch nào.</p>
                ) : (
                    recentTransactions.map((transaction, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                            <div>
                                <div className="font-medium text-lg">{transaction.name}</div>
                                <div className="text-sm text-gray-500">{new Date().toLocaleDateString()}</div>
                            </div>
                            <div
                                className={`font-semibold text-xl ${
                                    transaction.type === 'Income' ? 'text-[#22c55e]' : 'text-[#ef4444]'
                                }`}
                            >
                                {transaction.type === 'Income' ? '+' : '-'}${transaction.price}
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default RecentTransactions;
