import { FaDollarSign } from 'react-icons/fa';

const OverviewCard = ({ title, amount, color }) => (
    <div className="bg-[#1e1e2f] p-4 rounded-xl flex-1 text-white shadow-lg">
        <div className="flex items-center gap-2 text-lg">
            <FaDollarSign style={{ color }} />
            <span className="font-semibold">{title}</span>
        </div>
        <div className="text-2xl font-bold mt-2" style={{ color }}>
            {amount}
        </div>
    </div>
);

export default OverviewCard;
