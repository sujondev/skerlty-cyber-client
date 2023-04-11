import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = { createuser, login }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;