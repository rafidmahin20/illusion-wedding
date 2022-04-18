import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const RequireAuth = ({children}) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    if(user){
        return children;
    }else{
        return <Navigate to='/login' state={{from: location}} replace />
    }
};

export default RequireAuth;