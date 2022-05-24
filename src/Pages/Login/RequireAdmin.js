import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useFindAdmin from '../hooks/useFindAdmin';
import Loading from '../Sheared/Loading';


const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useFindAdmin(user)
    let location = useLocation();
    if (loading || adminLoading) {
        return <Loading loading={loading} color={'#081663'}></Loading>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;