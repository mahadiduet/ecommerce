import { useContext } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddUser = e => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const imageUrl = from.imageUrl.value;
        const password = from.password.value;
        console.log(name, email, imageUrl, password);

        createUser(email, password)
            .then(result => {
                updateUser(name, imageUrl)
                    .then((updateUser) => {
                        console.log(updateUser)
                    }).catch((error) => {
                        console.log(error);
                    });
                // const userEmail = result.user.email;
                // const createdAt = result.user.metadata.createdAt;
                // const lastSignInTime = result.user.metadata.lastSignInTime;

                // const user = { userEmail, createdAt, lastSignInTime }

                // Data pass to MongoDB by API
                // fetch('https://dokani-server.vercel.app/user', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(user)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //     })
                // toast.success('You are successfully registration.');
                navigate('/');
            })
            .catch((error) => {
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    // toast.error('This user Already exist, please login.')
                    console.log('Firebase: Error (auth/email-already-in-use)');
                }
            });
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 via-blue-300 to-purple-400">
            <div className="relative w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
                <div className="absolute inset-0 w-full h-full bg-opacity-20 bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 rounded-lg filter blur-sm"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-extrabold text-center text-gray-900">Sign Up</h2>
                    <form className="space-y-4" onSubmit={handleAddUser}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-200 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
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
                            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Enter your image URL"
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
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;