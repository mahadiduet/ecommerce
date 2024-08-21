
const AddProduct = () => {

    const handleProduct = e => {
        e.preventDefault();
        const from = e.target;
        const productName = from.productName.value;
        const productImage = from.productImage.value;
        const description = from.description.value;
        const price = parseInt(from.price.value);
        const category = from.category.value;
        const brand = from.brand.value;
        const ratings = parseInt(from.ratings.value);
        const creationDateTime = from.creationDateTime.value;
        const product = {productImage, productName, description, price, category, brand, ratings, creationDateTime};
        console.log(product);
        fetch('http://localhost:5000/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.insertedId){
                    // toast.success('Tourism added successfull!');
                    console.log('Product add successfully');
                    from.reset();
                }
                
            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 flex items-center justify-center">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Upload New Product</h2>
                <form onSubmit={handleProduct} className="space-y-6">
                    {/* Product Name */}
                    <div>
                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            placeholder="Enter product name"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Product Image */}
                    <div>
                        <label htmlFor="productImage" className="block text-sm font-medium text-gray-700">Product Image URL</label>
                        <input
                            type="text"
                            id="productImage"
                            name="productImage"
                            placeholder="Enter product image URL"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            placeholder="Enter product description"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Enter product price"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            id="category"
                            name="category"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select a category</option>
                            <option value="mobile">Mobile</option>
                            <option value="laptop">Laptop</option>
                            <option value="keyboard">Keyboard</option>
                            <option value="mouse">Mouse</option>
                        </select>
                    </div>
                    {/* Brand */}
                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                        <select
                            id="brand"
                            name="brand"
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select a brand</option>
                            <option value="hp">HP</option>
                            <option value="asus">Asus</option>
                            <option value="apple">Apple</option>
                            <option value="dell">Dell</option>
                        </select>
                    </div>

                    {/* Ratings */}
                    <div>
                        <label htmlFor="ratings" className="block text-sm font-medium text-gray-700">Ratings</label>
                        <input
                            type="number"
                            id="ratings"
                            name="ratings"
                            step="0.1"
                            min="0"
                            max="5"
                            placeholder="Enter product ratings (0-5)"
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
                        Upload Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;