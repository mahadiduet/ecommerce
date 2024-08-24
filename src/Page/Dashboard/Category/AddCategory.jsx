import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const navigate = useNavigate();

    const handleCategory = e => {
        e.preventDefault();
        const from = e.target;
        const categoryName = from.categoryName.value;
        const categoryCode = from.categoryCode.value;
        const creationDateTime = from.creationDateTime.value;
        const category = { categoryName, categoryCode, creationDateTime };

        fetch('http://localhost:5000/add-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    from.reset();
                    console.log('Category add successfully.');
                    navigate('/dashboard/category');
                }

            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 flex items-center justify-center">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Add Category</h2>
                <form onSubmit={handleCategory} className="space-y-6">
                    {/* Category Name */}
                    <div>
                        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">Category Name</label>
                        <input
                            type="text"
                            id="categoryName"
                            name="categoryName"
                            placeholder="Enter category name"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    {/* Category Code */}
                    <div>
                        <label htmlFor="categoryCode" className="block text-sm font-medium text-gray-700">Category Code</label>
                        <input
                            type="text"
                            id="categoryCode"
                            name="categoryCode"
                            placeholder="Enter category code"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    
                    {/* Creation Date and Time */}
                    <div>
                        <label htmlFor="creationDateTime" className="block text-sm font-medium text-gray-700">Creation Date & Time</label>
                        <input
                            type="datetime-local"
                            id="creationDateTime"
                            name="creationDateTime"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Upload Category
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;