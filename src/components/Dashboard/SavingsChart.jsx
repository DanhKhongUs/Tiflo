import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList, Area, AreaChart } from 'recharts';

const data = [
    { month: 'January', value: 3700 },
    { month: 'February', value: 7200 },
    { month: 'March', value: 15000 },
];

const SavingsChart = () => (
    <div className="bg-gray-300 text-sm p-4 rounded-xl text-white w-[750px] h-full">
        <h3 className="text-gray-800 text-2xl mb-4 flex items-center gap-2">📈 2025 Savings</h3>
        <ResponsiveContainer width="100%" height={450}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2e8ef7" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#2e8ef7" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" tickFormatter={(value) => `${(value / 1000).toFixed(0)}k $US`} />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Area type="monotone" dataKey="value" stroke="#2e8ef7" strokeWidth={2} fill="url(#colorSavings)">
                    <LabelList
                        dataKey="value"
                        position="top"
                        formatter={(value) => `${(value / 1000).toFixed(1)}k $US`}
                    />
                </Area>
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export default SavingsChart;
