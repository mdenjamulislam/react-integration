import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signinUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Abserve auth state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            console.log("Abserving Current User", currentUser);
        });

        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {user, loading, createUser, signinUser, logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
}



/**
 * Create Context
 * set provider with value
 * use the AuthProvider in the main.jsx
 * access childreen in the AuthProvider components
 */