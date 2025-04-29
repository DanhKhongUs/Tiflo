import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OverviewCard = ({ title, amount, color }) => (
    <div className="flex items-center rounded-xl flex-1 bg-gray-900 text-white shadow-lg overflow-hidden min-h-[100px]">
        {/* Left icon block */}
        <div className="flex items-center justify-center w-24 h-full bg-gray-800 border-r border-gray-700">
            <FontAwesomeIcon icon={faDollarSign} style={{ color, fontSize: '3.rem' }} />
        </div>

        {/* Right text block */}
        <div className="flex flex-col justify-center ml-16 p-5">
            <span className="text-xl text-gray-300">{title}</span>
            <span className="text-4xl font-bold" style={{ color }}>
                {amount}
            </span>
        </div>
    </div>
);

export default OverviewCard;
