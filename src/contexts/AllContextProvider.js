import React, { createContext, useState} from 'react';
import {getAuth} from 'firebase/auth';

export const AllContext = createContext();
const auth= getAuth();
const AllContextProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
};

export default AllContextProvider;