import React from 'react';
import { signup } from '../actions/authActions';
import HeaderPage from './componentsPage/HeaderPage';
import FormRegisterUser from './forms/FormRegisterUser';
import { useDispatch} from 'react-redux';


export default function RegisterUserPage(){

    const dispatch = useDispatch();

    const handleForm = data => {
        console.log(data);
        dispatch(signup(data))
    }
    
    return(
        <div class="container-fluid">
            <HeaderPage urlPath="/" textButton="Voltar"/>
            <FormRegisterUser onSubmit={values => handleForm(values)}/>
        </div>
    );
}