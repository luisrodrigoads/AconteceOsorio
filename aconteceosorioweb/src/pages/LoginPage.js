import React,{useState} from 'react'
import {login} from '../actions/authActions'
import { useSelector, useDispatch} from 'react-redux';
import HeaderPage from './componentsPage/HeaderPage'
import FormLogin from './forms/FormLogin';
import { Redirect } from 'react-router';

export default function LoginPage() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.personalInfo);

    const handleForm = data => {
        console.log("FORM LOGIN HANDLED")
        console.log(data);
        dispatch(login(data));
    }



    return (
        <>
        { user._id == '' ? 
            <div class="container-fluid">
                <HeaderPage urlPath="/" textButton={"Voltar"}/>
                <FormLogin onSubmit={values => handleForm(values)}/>
            </div>
        :
            <Redirect to="/" />
        }
        </>
    );
}
