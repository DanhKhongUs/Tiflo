import TransactionList from '~/components/Transaction/TransactionList';
function Transaction() {
    return (
        <div className="px-18 py-6 md:grid-cols-3 gap-6 text-black bg-white min-h-full">
            <TransactionList />
        </div>
    );
}

export default Transaction;
