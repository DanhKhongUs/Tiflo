import OverviewCard from '~/components/Dashboard/OverviewCard';
import SavingsChart from '~/components/Dashboard/SavingsChart';
import DonutChart from '~/components/Dashboard/DonutChart';

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

export default function Dashboard() {
    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-white bg-[#0d0d0d] min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <OverviewCard title="Tổng Thu Nhập" amount="$2,700" color="#4CAF50" />
                <OverviewCard title="Tổng Chi Tiêu" amount="$395" color="#F44336" />
                <OverviewCard title="Số Dư" amount="$2,305" color="#2196F3" />
            </div>

            <div className="md:col-span-1">
                <SavingsChart />
            </div>
            <div className="md:col-span-1">
                <DonutChart title="🕒 Income Breakdown" data={incomeData} total="20k" colorSet={incomeColors} />
            </div>
            <div className="md:col-span-1">
                <DonutChart title="🕒 Expenses Breakdown" data={expenseData} total="5.3k" colorSet={expenseColors} />
            </div>
        </div>
    );
}
