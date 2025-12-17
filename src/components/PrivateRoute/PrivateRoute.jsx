import { useContext } from 'react';
import { UserContext } from '../../App';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    const location = useLocation();

    return (
        <>
            {
                user.email ?
                    (children)
                    :
                    (<Navigate to={{ pathname: '/login' }} state={{ from: location.pathname }} />)
            }
        </>
    );
};

export default PrivateRoute;