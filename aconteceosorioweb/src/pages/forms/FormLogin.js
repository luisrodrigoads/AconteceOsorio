import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const FormLogin = props => {

    const loading = useSelector(state => state.auth.loading)

    return(
        <div class="row  align-items-center justify-content-center ">
                <div class="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light">
                    <form onSubmit={props.handleForm}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email:</label>
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
                            <label for="exampleInputPassword1">Senha:</label>
                            <Field
                                required
                                name='senha'
                                component='input'
                                type='password'
                                className='form-control'
                            />
                        </div>

                        <div class="row  align-items-center justify-content-center ">
                            <button  type="submit" class="btn btn-secondary">                       
                                    {loading ? 'Carregando':'Entrar'}
                            </button>                    
                        </div>
                       
                        <div class="row  align-items-center justify-content-center ">
                            <Link to="/RegisterUserPage">
                                <h3>
                                    Cadastrar
                                </h3>
                            </Link>
                        </div>  
                        
                    </form> 

                    
                </div>
        </div>
    )

}

export default reduxForm({form: 'formLogin'})(FormLogin)