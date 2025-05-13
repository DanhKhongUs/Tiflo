import CategoryList from '~/components/Category/CategoryList';

function Category() {
    return (
        <div className="px-18 py-6 md:grid-cols-3 gap-6 text-black bg-white min-h-full">
            <CategoryList />
        </div>
    );
}

export default Category;
