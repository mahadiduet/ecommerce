import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {loginUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const existLocation = location?.state || '/';

    const handleLoginUser = e => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        loginUser(email, password)
            .then((result) => {
                console.log('You are successfully logged in')
                // toast.success('You are successfully logged in')
                navigate(existLocation);
            })
            .catch((error) => {
                // { toast.error('Username and password not match') }
            });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 via-blue-300 to-purple-400">
            <div className="relative w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
                <div className="absolute inset-0 w-full h-full bg-opacity-20 bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 rounded-lg filter blur-sm"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign Up</h2>
                    <form className="space-y-4" onSubmit={handleLoginUser}>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;