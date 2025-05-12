import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function DonutChart({ data, total, colorSet, title }) {
    return (
        <div className="bg-gray-200 p-4 rounded-xl w-full h-[530px] flex flex-col justify-between text-gray-800">
            <h3 className="mb-4 text-center text-lg font-semibold text-gray-700">{title}</h3>

            <div className="relative flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius="70%"
                            outerRadius="90%"
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={0}
                        >
                            {data.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={colorSet[index % colorSet.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center content inside donut */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="text-2xl font-bold text-gray-900">{total} $US</div>
                    <div className="text-sm text-gray-500">Tổng giá trị số tiền</div>
                </div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-700">
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
}

export default DonutChart;
