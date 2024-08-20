import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header className="bg-white shadow-md">
            <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <a href="#" className="flex items-center space-x-2">
                        {/* <img src="https://via.placeholder.com/40" alt="Logo" className="w-10 h-10" /> */}
                        <span>Dokani</span>
                    </a>
                </div>

                {/* Navigation Menu */}
                <nav className="flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-gray-800">Home </Link>
                    <Link to="/product" className="text-gray-600 hover:text-gray-800">Product</Link>
                    <Link to="/signup" className="text-gray-600 hover:text-gray-800">Signup</Link>
                    <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>

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
                </nav>
            </div>
        </header>
    );
};

export default Header;