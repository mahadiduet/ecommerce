import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/Firebase.Config";

export const AuthContext = createContext(null);
const FirebaseProvider = ({children}) => {

    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update profile
    const updateUser = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    //User LogIn
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const allValues = {
        createUser,
        updateUser,
        loginUser,
        loading
    };

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;