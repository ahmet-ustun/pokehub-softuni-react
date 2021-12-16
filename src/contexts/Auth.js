import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect, createContext } from 'react';
import { auth } from '../firebase.js';

const AuthContext = createContext(undefined);

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
            });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
    AuthProvider
}