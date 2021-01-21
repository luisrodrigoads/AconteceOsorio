import React,{useEffect, useState} from 'react'
import {logout} from '../actions/authActions'
import { useDispatch} from 'react-redux';
import { Redirect } from 'react-router';

export default function LogoutPage() {

    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(logout());
    }, [])
    

    return (
        <Redirect to="/" />
    );
}
