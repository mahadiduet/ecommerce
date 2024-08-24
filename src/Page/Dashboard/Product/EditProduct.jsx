import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProduct = () => {

    const product = useLoaderData();
    console.log(product);
    const { _id, brand, category, creationDateTime, description, price, productImage, productName, ratings } = product;
    const [selectCategory, setSelectCategory] = useState(category);
    const [selectBrand, setSelectBrand] = useState(brand);
    const navegate = useNavigate();
    console.log(_id);


    const handleCategoryChange = event =>{
        event.preventDefault();
        setSelectCategory(event.target.value);
    }
    const handleBrandChange = event =>{
        event.preventDefault();
        setSelectBrand(event.target.value);
    }


    const handleEditProduct = e => {
        e.preventDefault();
        const from = e.target;
        const productName = from.productName.value;
        const productImage = from.productImage.value;
        const description = from.description.value;
        const price = parseFloat(from.price.value);
        const category = from.category.value;
        const brand = from.brand.value;
        const ratings = parseFloat(from.ratings.value);
        const creationDateTime = from.creationDateTime.value;
        const product = { productImage, productName, description, price, category, brand, ratings, creationDateTime };
        // console.log(product);
        fetch(`http://localhost:5000/edit-product/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    // toast.success('Tourism added successfull!');
                    navegate('/dashboard/products');
                }

            })
    }


    return (
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 flex items-center justify-center">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Update Product</h2>
                <form onSubmit={handleEditProduct} className="space-y-6">
                    {/* Product Name */}
                    <div>
                        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            defaultValue={productName}
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
                            defaultValue={productImage}
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
                            defaultValue={description}
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
                            defaultValue={price}
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
                            value={selectCategory}
                            onChange={handleCategoryChange}
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
                            value={selectBrand}
                            onChange={handleBrandChange}
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
                            defaultValue={ratings}
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
                            defaultValue={creationDateTime}
                            className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    >
                        Update Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;