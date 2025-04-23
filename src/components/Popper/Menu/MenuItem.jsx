import { Link } from 'react-router-dom';

function MenuItem({ data, onClick }) {
    const baseClass =
        'w-full flex items-center justify-start rounded-none font-medium px-4 py-[11px] leading-[1.8rem] hover:bg-[rgba(22,24,35,0.1)] text-[#161823]';
    const separateClass = data.separate ? 'border-t border-[rgba(22,24,35,0.12)]' : '';

    const content = (
        <button className={`${baseClass} ${separateClass}`} onClick={onClick}>
            {data.icon && <span className="mr-2">{data.icon}</span>} {/* Hiển thị icon nếu có */}
            {data.title}
        </button>
    );

    return data.to ? <Link to={data.to}>{content}</Link> : content;
}

export default MenuItem;
