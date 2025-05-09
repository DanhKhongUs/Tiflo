import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OverviewCard = ({ title, amount, color }) => (
    <div className="flex items-center rounded-xl flex-1 bg-gray-300 text-gray-800 shadow-md overflow-hidden min-h-[100px]">
        {/* Left icon block */}
        <div className="flex items-center justify-center w-24 h-full bg-gray-400 border-r border-gray-500 shadow-inner">
            <FontAwesomeIcon icon={faDollarSign} className="text-4xl text-gray-100" style={{ color }} />
        </div>

        {/* Right text block */}
        <div className="flex flex-col justify-center ml-16 p-5">
            <span className="text-xl text-gray-700">{title}</span>
            <span className="text-4xl font-bold text-gray-900">{amount}</span>
        </div>
    </div>
);

export default OverviewCard;
