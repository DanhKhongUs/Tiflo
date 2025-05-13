import OverviewCard from '~/components/Dashboard/OverviewCard';
import SavingsChart from '~/components/Dashboard/SavingsChart';
import DonutChart from '~/components/Dashboard/DonutChart';
import RecentTransactions from '~/components/RecentTransactions/RecentTransactions';
import { useState, useEffect } from 'react';
import Footer from '~/layouts/Footer';

const incomeData = [
    { name: 'Salary', value: 15000 },
    { name: 'Freelance', value: 5000 },
];

const incomeColors = ['#66D9A3', '#1FAB89'];

const expenseData = [
    { name: 'Rent/Mortgage', value: 3000 },
    { name: 'Utilities', value: 1000 },
    { name: 'Retail', value: 900 },
    { name: 'Dining Out', value: 400 },
];

const expenseColors = ['#ff5f5f', '#e74c3c', '#ff7979', '#c0392b'];

function Dashboard() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        try {
            const getStorage = JSON.parse(localStorage.getItem('transactions')) || [];
            setTransactions(getStorage);
        } catch (error) {
            console.error('Lỗi khi đọc localStorage!', error);
        }
    }, []);

    const income = transactions.filter((t) => t.type === 'Income').reduce((sum, t) => sum + t.price, 0);
    const expense = transactions.filter((t) => t.type === 'Expense').reduce((sum, t) => sum + t.price, 0);

    const balance = income - expense;

    return (
        <div className="mt-6 md:grid-cols-3 gap-6 text-white bg-white min-h-screen">
            <div className="flex px-14 md:grid-cols-3 gap-6 mb-6">
                <OverviewCard title="Tổng Thu Nhập" amount={`$${income}`} color="#119d50" />
                <OverviewCard title="Tổng Chi Tiêu" amount={`$${expense}`} color="#F44336" />
                <OverviewCard title="Số Dư" amount={`$${balance}`} color="#2196F3" />
            </div>

            <div className="flex px-14 gap-6 justify-between items-center">
                <div className="flex-1">
                    <SavingsChart />
                </div>
                <div className="flex-1">
                    <DonutChart
                        title="🕒 Tổng số tiền thu nhập"
                        data={incomeData}
                        total="20k"
                        colorSet={incomeColors}
                    />
                </div>
                <div className="flex-1">
                    <DonutChart
                        title="🕒 Tổng số tiền đã chi tiêu"
                        data={expenseData}
                        total="5.3k"
                        colorSet={expenseColors}
                    />
                </div>
            </div>

            <div className="px-14">
                <RecentTransactions />
            </div>

            <div className="mt-8">
                <Footer />
            </div>
        </div>
    );
}

export default Dashboard;
