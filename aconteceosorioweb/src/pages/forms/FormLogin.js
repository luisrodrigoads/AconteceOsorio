import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { Link } from 'react-router-dom';

import styles from '../../styles/LoginPageStyle';

const FormLogin = props => {

    const formComponents = [
        {
            label: 'Email',
            name: 'email',
        },
        {
            label: 'Senha',
            name: 'password',
            type: 'password',
            autocomplete: 'on'
        },
    ];

    return(
        <div className="row  align-items-center justify-content-center">
                <div className="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow">
                    <form onSubmit={props.handleSubmit} >
                        
                        {formComponents.map(comp => {
                            return(
                                <div key={comp.name} className="form-group">
                                    <label htmlFor={comp.name}>{comp.label}</label>
                                    <Field
                                        required
                                        name={comp.name}
                                        component='input'
                                        type={comp.type ? comp.type : 'text'}
                                        autoComplete={comp.autocomplete ? comp.autocomplete : 'off'}
                                        className='form-control'
                                    />
                                </div>
                            );
                        })}

                        <button  type="submit" className="btn btn-secondary btn-lg btn-block">Entrar</button> 
                        
                        <Link to="/RegisterUserPage">
                            <button type="button" className="btn btn-secondary btn-sm btn-block" style={styles.buttonRegister}>
                                <h3 className="navbar-brand text-white">Cadastrar</h3>
                            </button>   
                        </Link>  

                    </form>    
                </div>
        </div>
    )
}

export default reduxForm({form: 'formLogin'})(FormLogin)