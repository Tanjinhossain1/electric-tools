import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    
    if (loading) {
        return <Loading loading={loading} color={'#a20afa'}></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;