import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({ children, ...rest }) => {
    const history = useHistory();
    const token = useSelector(state => state.UserReducer.token);

    if(!token || token == '') {
        history.push('/login');
        return null;
    }

    return <Route {...rest}>{children}</Route>
}