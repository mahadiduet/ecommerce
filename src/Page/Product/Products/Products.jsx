import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../../../components/Product";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const Products = () => {
    const bio = useLoaderData();
    // console.log(bio);
    const totalBiodata = bio.length;
    console.log(totalBiodata);
    const [products, setProducts] = useState(bio);

    // Filter option
    const [ageRange, setAgeRange] = useState({ min: '', max: '' });
    const [filteredData, setFilteredData] = useState([]);
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [gender, setGender] = useState('');
    const [division, setDivision] = useState('');


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
            const sortedProduct = [...products].sort((a, b) =>new Date(b.creationDateTime) - new Date(a.creationDateTime));
            setProducts(sortedProduct);
        }
    }


    // Handle Filter
    const handleFilter = e => {
        e.preventDefault();
        const from = e.target;
        const min_age = from.min_age.value;
        const max_age = from.max_age.value;
        const gender = from.gender.value;
        // console.log(gender);
        const division = from.division.value;
        // console.log(min_age, max_age, gender, division);
        setMinAge(min_age);
        setMaxAge(max_age);
        setGender(gender);
        setDivision(division);
    }

    useEffect(() => {
        const filtered = products.filter(item => {
            const age = item.age;
            return (
                (minAge === '' || age >= minAge) &&
                (maxAge === '' || age <= maxAge) &&
                (gender === '' || item.biodata_type === gender) &&
                (division === '' || item.permanent_division === division)
            );
        });
        setFilteredData(filtered);
    }, [minAge, maxAge, gender, division, products]);


    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Handle Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    // console.log('SSS:',indexOfFirstItem);
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    console.log('Curretn Items:', currentItems);
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
                                <label className="block mb-1">Age Range</label>
                                <div className="flex">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        name="min_age"
                                        className="w-1/2 px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                        defaultValue={minAge}
                                        onChange={(e) => setAgeRange(minAge)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        name="max_age"
                                        className="w-1/2 ml-2 px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                        value={ageRange.max}
                                        onChange={(e) => setAgeRange({ ...ageRange, max: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Gender</label>
                                <select
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                    value={gender}
                                    name="gender"
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Division</label>
                                <select
                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:border-blue-400"
                                    value={division}
                                    name="division"
                                    onChange={(e) => setDivision(e.target.value)}
                                >
                                    <option value="">Select Division</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chattagram">Chattagram</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Barisal">Barisal</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Maymansign">Maymansign</option>
                                    <option value="Sylhet">Sylhet</option>
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