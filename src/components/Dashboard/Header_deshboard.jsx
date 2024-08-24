import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";

const Header_deshboard = () => {

    const { user, logout } = useContext(AuthContext);
    return (
        <header className="bg-[#FFFFFF] shadow-md w-full flex justify-between items-center px-6 h-16">
            <div className="flex items-center">
                <button className="text-[#2C3E50] focus:outline-none lg:hidden">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <input
                    type="text"
                    placeholder="Search..."
                    className="ml-4 p-2 border border-[#BDC3C7] rounded-lg text-[#2C3E50]"
                />
            </div>
            <div className="flex items-center space-x-6">
                <button className="text-[#2C3E50]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4ZM7 7V19H17V7H7ZM10 10H14V14H10V10Z" fill="currentColor" />
                    </svg>
                </button>
                <button className="text-[#2C3E50]">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20M4 4V20H20V4M4 4L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {user?.photoURL ? (<img alt="Tailwind CSS Navbar component" src={user.photoURL} />) : (<img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/9rrBVK6/man.jpg" />)}
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <Link>{user?.displayName ? `${user.displayName}` : ''}</Link>
                            <Link><button onClick={logout}>Logout</button></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header_deshboard;