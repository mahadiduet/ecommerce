import { useNavigate } from "react-router-dom";

const AddBrand = () => {
    const navigate = useNavigate();

    const handleBrand = e => {
        e.preventDefault();
        const from = e.target;
        const brandName = from.brandName.value;
        const brandCode = from.brandCode.value;
        const brandImage = from.brandImage.value;
        const creationDateTime = from.creationDateTime.value;
        const brand = { brandName, brandCode, brandImage, creationDateTime };
        
        fetch('http://localhost:5000/add-brand', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(brand)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    from.reset();
                    console.log('Brand add successfully.');
                    navigate('/dashboard/brand');
                }

            })
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 flex items-center justify-center">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Add Brand</h2>
                <form onSubmit={handleBrand} className="space-y-6">
                    {/* Brand Name */}
                    <div>
                        <label htmlFor="brandName" className="block text-sm font-medium text-gray-700">Brand Name</label>
                        <input
                            type="text"
                            id="brandName"
                            name="brandName"
                            placeholder="Enter brand name"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    {/* Brand Code */}
                    <div>
                        <label htmlFor="brandCode" className="block text-sm font-medium text-gray-700">Brand Code</label>
                        <input
                            type="text"
                            id="brandCode"
                            name="brandCode"
                            placeholder="Enter code name"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Brand Image */}
                    <div>
                        <label htmlFor="brandImage" className="block text-sm font-medium text-gray-700">Brand Image URL</label>
                        <input
                            type="text"
                            id="brandImage"
                            name="brandImage"
                            placeholder="Enter brand image URL"
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
                        Upload Brand
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBrand;