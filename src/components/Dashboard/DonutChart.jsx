import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DonutChart = ({ data, total, colorSet, title }) => (
    <div className="bg-[#111] p-4 rounded-xl text-white w-full max-w-[350px]">
        <h3 className="mb-4 flex items-center gap-2">{title}</h3>
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie data={data} innerRadius={70} outerRadius={100} dataKey="value" paddingAngle={2}>
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={colorSet[index % colorSet.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        <div className="text-center text-2xl font-bold mb-1">{total} $US</div>
        <p className="text-center text-sm text-gray-400">Valeur totale de Amount</p>

        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
            {data.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                    <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: colorSet[idx % colorSet.length] }}
                    />
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export default DonutChart;
