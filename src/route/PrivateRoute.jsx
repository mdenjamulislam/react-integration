import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='w-full h-screen flex items-center justify-center'>
            <span class="loading loading-dots loading-lg"></span>
        </div>
    }
    
    if (user) {
        return children;
    }
    return (
        <div className='container flex items-center justify-center pt-10'> 
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;