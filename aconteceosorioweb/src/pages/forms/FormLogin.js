import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const FormLogin = props => {

    const loading = useSelector(state => state.auth.loading)

    const formComponents = [
        {
            label: 'Email',
            name: 'email',
        },
        {
            label: 'Senha',
            name: 'password',
            type: 'password'
        },
    ];

    return(
        <div class="row  align-items-center justify-content-center">
                <div class="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow">
                    <form onSubmit={props.handleSubmit} >
                        
                        {formComponents.map(comp => {
                            return(
                                <div key={comp.name} class="form-group">
                                    <label htmlFor={comp.name}>{comp.label}</label>
                                    <Field
                                        required
                                        name={comp.name}
                                        component='input'
                                        type={comp.type ? comp.type : 'text'}
                                        className='form-control'
                                    />
                                </div>
                            );
                        })}

                        <button  type="submit" class="btn btn-secondary btn-lg btn-block">                       
                                    {loading ? 'Carregando':'Entrar'}
                        </button> 
                        
                        <Link to="/RegisterUserPage">
                        
                            <button type="button" class="btn btn-secondary btn-sm btn-block" style={{marginTop:'15px'}}>
                                <h3 class="navbar-brand text-white">
                                            Cadastrar
                                </h3>
                            </button>
                        
                        </Link> 
                          
                    </form> 

                    
                </div>
        </div>
    )

}

export default reduxForm({form: 'formLogin'})(FormLogin)