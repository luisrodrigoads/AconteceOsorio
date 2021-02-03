import React, { useEffect } from 'react'
import { logout } from '../actions/authActions'
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

function LogoutPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
    }, [dispatch])


    return (
        <Redirect to="/" />
    );
}

export default withRouter(LogoutPage);