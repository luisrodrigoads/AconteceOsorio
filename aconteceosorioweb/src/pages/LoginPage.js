import React,{useState} from 'react'
import {login} from '../actions/authActions'
import { useSelector, useDispatch} from 'react-redux';
import HeaderPage from './componentsPage/HeaderPage'
import FormLogin from './forms/FormLogin';

export default function LoginPage() {

    const dispatch = useDispatch();

    const handleForm = data => {
        console.log("FORM LOGIN HANDLED")
        console.log(data);
        dispatch(login(data));
    }



    return (
        <div class="container-fluid">
            <HeaderPage urlPath="/" textButton="Voltar"/>
            <FormLogin onSubmit={values => handleForm(values)}/>
        </div>
    );
}
