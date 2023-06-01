import React, { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user,lodding} = useContext(AuthContex); 
    const location = useLocation();
    console.log(location) 

    if(lodding){
        return <progress class="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoutes;