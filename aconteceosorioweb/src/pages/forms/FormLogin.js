import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const FormLogin = props => {

    const loading = useSelector(state => state.auth.loading)

    return(
        <div class="row  align-items-center justify-content-center">
                <div class="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow">
                    <form onSubmit={props.handleForm}>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <Field
                                required
                                name='email'
                                component='input'
                                type='text'
                                placeholder='username@email.com'
                                className='form-control' 
                            />
                        </div>
                        <div class="form-group">
                            <label for="senha">Senha:</label>
                            <Field
                                required
                                name='senha'
                                component='input'
                                type='password'
                                className='form-control'
                            />
                        </div>
                        <button  type="submit" class="btn btn-secondary btn-lg btn-block">                       
                                    {loading ? 'Carregando':'Entrar'}
                        </button> 
                        <button type="button" class="btn btn-secondary btn-sm btn-block">
                                <Link to="/RegisterUserPage">
                                    <h3 class="navbar-brand text-white">
                                        Cadastrar
                                    </h3>
                                </Link> 
                        </button> 
                          
                    </form> 

                    
                </div>
        </div>
    )

}

export default reduxForm({form: 'formLogin'})(FormLogin)