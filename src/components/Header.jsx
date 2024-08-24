import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Header = () => {

    const { user, logout } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('SSS:', searchQuery);
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };



    const profile = <>
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {user?.photoURL ? (<img alt="Tailwind CSS Navbar component" src={user.photoURL} />) : (<img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/9rrBVK6/man.jpg" />)}
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <Link>{user?.displayName ? `${user.displayName}` : ''}</Link>
                    <Link to='dashboard'>Dashboard</Link>
                    <Link><button onClick={logout}>Logout</button></Link>
                </ul>
            </div>
        </div>
    </>

    return (
        <header className="bg-white shadow-md">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/" className="flex items-center space-x-2">
                        {/* <img src="https://via.placeholder.com/40" alt="Logo" className="w-10 h-10" /> */}
                        <span>Dokani</span>
                    </Link>
                </div>

                {/* Search Option */}
                <form
                    onSubmit={handleSearch}
                    className="w-full max-w-md flex items-center"
                >
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products..."
                        className="w-full px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-300"
                    >
                        Search
                    </button>
                </form>

                {/* Navigation Menu */}
                <nav className="flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-gray-800">Home </Link>
                    <Link to="/product" className="text-gray-600 hover:text-gray-800">Product</Link>
                    <Link to="/addproduct" className="text-gray-600 hover:text-gray-800">Add Product</Link>
                    {user ? '' : <>
                        <Link to="/signup" className="text-gray-600 hover:text-gray-800">Signup</Link>
                        <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
                    </>
                    }
                    {/* Cart Icon */}
                    <a href="#" className="relative text-gray-600 hover:text-gray-800">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13h10l-1.6 8H8.6M5.4 5h14M6 18a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
                            />
                        </svg>
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">3</span>
                    </a>
                    {/* Profile */}
                    {user ? profile : ''}
                </nav>
            </div>
        </header>
    );
};

export default Header;