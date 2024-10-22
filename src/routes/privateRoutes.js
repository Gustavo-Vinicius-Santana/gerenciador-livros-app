import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

import LoadingLists from '../components/Loadings/LoadingLists';

const PrivateRoute = ({ element }) => {
    const { token } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            console.log("token dentro do efect", token)
        setIsLoading(false);
        };

        checkToken();
    }, [token]);

    console.log("o token fora do useEffect:", token);

    if (isLoading) {
        return <LoadingLists />
    }

    return token ? element : <Navigate to="/usuario/login" />;
};

export default PrivateRoute;