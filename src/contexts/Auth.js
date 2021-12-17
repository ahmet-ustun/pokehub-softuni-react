import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect, createContext } from 'react';
import { auth } from '../firebase.js';

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        const unsubscribe = onAuthStateChanged(auth, (user) => {
                setCurrentUser(user);
                setLoading(false);
            });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProvider
}