import React, { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom';
import { ClipLoader } from "react-spinners";
import { AllContext } from '../../contexts/AllContextProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AllContext);
    const location = useLocation();

    if(loading){
        return <ClipLoader color="red" />;
    }

    if(user && user.uid){
        return children;
    }
    else{
        return <Navigate to='/login' state ={{from: location}} replace></Navigate>;
    }
    
};

export default PrivateRoute;