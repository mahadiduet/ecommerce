import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-[#2C3E50] h-full fixed">
            <div className="p-6 text-white font-bold text-xl">Admin Panel</div>
            <nav className="mt-8">
                <Link to="/dashboard" className="block py-3 px-6 text-gray-200 hover:bg-[#34495E]">Dashboard</Link>
                <Link to="/dashboard/products" className="block py-3 px-6 text-gray-200 hover:bg-[#34495E]">Products</Link>
                <Link to="/dashboard/brand" className="block py-3 px-6 text-gray-200 hover:bg-[#34495E]">Brand</Link>
                <Link to="/dashboard/category" className="block py-3 px-6 text-gray-200 hover:bg-[#34495E]">Category</Link>
                <a href="#" className="block py-3 px-6 text-gray-200 hover:bg-[#34495E]">Analytics</a>
                <a href="#" className="block py-3 px-6 text-gray-200 hover:bg-[#34495E]">Settings</a>
                <Link to="/" className="block py-3 px-6 text-gray-200 hover:bg-[#34495E]">Visit Site</Link>
            </nav>
        </aside>
    );
};

export default Sidebar;