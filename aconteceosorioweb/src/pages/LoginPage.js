import React from 'react'
import { login } from '../actions/authActions'
import { useSelector, useDispatch } from 'react-redux';
import HeaderPage from './componentsPage/HeaderPage'
import FormLogin from './forms/FormLogin';
import { Redirect, withRouter } from 'react-router';

function LoginPage() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.personalInfo);

    const handleForm = data => {
        console.log("FORM LOGIN HANDLED")
        console.log(data);
        dispatch(login(data));
    }


    return (
        <>
            { user._id === '' ?
                <div className="container-fluid">
                    <HeaderPage urlPath="/" textButton={"Voltar"} />
                    <FormLogin onSubmit={values => handleForm(values)} />
                </div>
                :
                <Redirect to="/InitialUserPage" />
            }
        </>
    );
}

export default withRouter(LoginPage);
