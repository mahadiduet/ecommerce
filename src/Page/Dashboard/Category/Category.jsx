import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const Category = () => {

    const categories = useLoaderData();
    console.log(categories);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Calculate total pages
    const totalPages = Math.ceil(categories.length / rowsPerPage);

    // Get current page's brand
    const currentCategories = categories.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };

    return (
        <div className="overflow-x-auto w-11/12 mx-auto mt-10">
            <Link to='/dashboard/addcategory'>
                <button className="flex items-center gap-1 bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    <BiPlus className="ml-2 font-extrabold" />
                    Add Category
                </button>
            </Link>

            <div className="mb-4 flex justify-between items-center">
                <span>Rows per page:</span>
                <select value={rowsPerPage} onChange={handleRowsPerPageChange} className="border border-gray-300 rounded p-2">
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>

            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-1 px-2 text-left">#</th>
                        <th className="py-1 px-2 text-left">Name</th>
                        <th className="py-1 px-2 text-left">Code</th>
                        <th className="py-1 px-2 text-left">Creted Date</th>
                        <th className="py-1 px-2 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {currentCategories.map((category, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-2 px-2 text-left whitespace-nowrap">
                                <span className="font-medium">{(currentPage - 1) * rowsPerPage + index + 1}</span>
                            </td>
                            <td className="py-2 px-2 text-left whitespace-nowrap">
                                <span className="font-medium">{category.categoryName}</span>
                            </td>
                            <td className="py-2 px-2 text-left whitespace-nowrap">
                                <span className="font-medium">{category.categoryCode}</span>
                            </td>
                            <td className="py-2 px-2 text-left">
                                <span>{category.creationDateTime}</span>
                            </td>
                            <td className="py-2 px-2 text-center">
                                <div className="flex item-center justify-center space-x-4">
                                    <Link to={`/dashboard/edit_category/${category._id}`}>
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                    <button className="text-red-600 hover:text-red-800">
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:opacity-50 flex items-center"
                >
                    <FaArrowLeft className="mr-2" /> Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 disabled:opacity-50 flex items-center"
                >
                    Next <FaArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default Category;