import React, { useContext } from 'react';
import { AuthContex } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const {user,lodding} = useContext(AuthContex);  

    if(lodding){
        return <progress class="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivetRoutes;