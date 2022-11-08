import React, { createContext, useEffect, useState} from 'react';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AllContext = createContext();
const auth= getAuth(app);
const AllContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);

    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
      }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const allInfo = {
        user, 
        loading,
        createUser,
        providerLogin, 
        login, 
        logOut
    }

    return (
        <AllContext.Provider value={allInfo}>
            {children}
        </AllContext.Provider>
    );

};

export default AllContextProvider;