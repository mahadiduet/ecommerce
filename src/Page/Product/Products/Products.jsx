import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../../../components/Product";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const Products = () => {
    const pro = useLoaderData();
    // console.log(bio);
    const totalProductdata = pro.length;
    const [products, setProducts] = useState(pro);

    // Filter option
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [filteredData, setFilteredData] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrcie] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');


    // Handle Sorting
    const handleAcendingOrder = (e) => {
        e.preventDefault();
        const newValue = e.target.value;
        if (newValue === "acending") {
            const sortedProduct = [...products].sort((a, b) => a.price - b.price);
            setProducts(sortedProduct);
        }
        if (newValue === "decending") {
            const sortedProduct = [...products].sort((a, b) => b.price - a.price);
            setProducts(sortedProduct);
        }
        if (newValue === "newest") {
            const sortedProduct = [...products].sort((a, b) => new Date(b.creationDateTime) - new Date(a.creationDateTime));
            setProducts(sortedProduct);
        }
    }


    // Handle Filter
    const handleFilter = e => {
        e.preventDefault();
        const from = e.target;
        const min_price = from.min_price.value;
        const max_price = from.max_price.value;
        const category = from.category.value;
        const brand = from.brand.value;
        setMinPrice(min_price);
        setMaxPrcie(max_price);
        setCategory(category);
        setBrand(brand);
    }

    useEffect(() => {
        const filtered = products.filter(item => {
            const price = item.price;
            return (
                (minPrice === '' || price >= minPrice) &&
                (maxPrice === '' || price <= maxPrice) &&
                (category === '' || item.category === category) &&
                (brand === '' || item.brand === brand)
            );
        });
        setFilteredData(filtered);
    }, [minPrice, maxPrice, category, brand, products]);


    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Handle Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    // console.log('SSS:',indexOfFirstItem);
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1 bg-gray-200">
                    <div className="bg-gray-200 p-4">
                        <h2 className="text-lg font-bold mb-2">Filters</h2>
                        <form onSubmit={handleFilter}>
                            <div className="mb-4">
                                <label className="block mb-1">Price Range</label>
                                <div className="flex">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        name="min_price"
                                        className="w-1/2 px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                        defaultValue={minPrice}
                                        onChange={(e) => setMinPrice(minPrice)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        name="max_price"
                                        className="w-1/2 ml-2 px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Category</label>
                                <select
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                    value={category}
                                    name="category"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="">Select Category</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="keyboard">Keyboard</option>
                                    <option value="mouse">Mouse</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Brand</label>
                                <select
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                    value={brand}
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                >
                                    <option value="">Select Brand</option>
                                    <option value="hp">HP</option>
                                    <option value="asus">Asus</option>
                                    <option value="apple">Apple</option>
                                    <option value="dell">Dell</option>
                                </select>
                            </div>
                            <button
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                Apply Filters
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-span-3 bg-gray-300 p-4">
                    <div className="w-full">
                        <select onChange={handleAcendingOrder} className="select select-bordered w-[300px] mb-6">
                            <option selected>Sort</option>
                            <option value="acending">Price - Low to High</option>
                            <option value="decending">Price - High to Low</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                        {
                            currentItems.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            className={`px-3 py-1 mx-1 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                            disabled={currentPage === 1}
                        >
                            <GrCaretPrevious />
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            className={`px-3 py-1 mx-1 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                            disabled={currentPage === totalPages}
                        >
                            <GrCaretNext />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;