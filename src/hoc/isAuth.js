import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const isAuth = (WrappedComponent) => {

    const Component = (props) => {
        const { isAuthenticated } = useContext(AuthContext);
        const history = useHistory();

        if (!isAuthenticated) {
            history.push('/unauthorized')

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
};

export default isAuth;