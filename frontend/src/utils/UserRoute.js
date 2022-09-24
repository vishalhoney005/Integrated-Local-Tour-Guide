import { Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from 'context/UserContext';


const UserRoute = ({component, ...rest}) => {

    let { user } = useContext(UserContext);

    if (!user ) {
        return (<Route {...rest}>{<Navigate to='/login' />} </Route>)
    } else  {
        return (<Route {...rest} component={component} />)
    }
}

export default UserRoute;