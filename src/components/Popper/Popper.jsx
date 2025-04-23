function Popper({ children }) {
    return (
        <div className="w-full max-h-[min((100vh-96px)-60px,734px)] min-h-[100px] pt-2 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] rounded-lg flex flex-col">
            {children}
        </div>
    );
}

export default Popper;
