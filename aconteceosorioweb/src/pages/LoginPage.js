import React from 'react'
import { login } from '../actions/authActions'
import { useSelector, useDispatch } from 'react-redux';
import FormLogin from './forms/FormLogin';
import { Redirect, withRouter } from 'react-router';

function LoginPage() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.personalInfo);

    const handleForm = data => {
        console.log(data);
        dispatch(login(data));
    }

    return (
        <>
            { user._id === '' ?
                <div className="container-fluid">
                    <FormLogin onSubmit={values => handleForm(values)} />
                </div>
                :
                <Redirect to="/InitialUserPage" />
            }
        </>
    );
}

export default withRouter(LoginPage);
