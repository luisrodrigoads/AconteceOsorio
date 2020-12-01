import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { useSelector } from 'react-redux'


const FormRegisterUser = props => {
    
    const loading = useSelector(state => state.auth.loading)
   
    return(
        <div class="row  align-items-center justify-content-center ">
            <div class="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light">
                <form onSubmit={props.handleForm}>
                    <div class="form-group">
                        <label for="razaoSocial">Razão Social:</label>
                        <Field
                            required
                            name='razaoSocial'
                            component='input'
                            type='text'
                            className='form-control' 
                        />
                    </div>

                    <div class="form-group">
                        <label for="nomeFantasia">Nome Fantasia:</label>
                        <Field
                            required
                            name='nomeFantasia'
                            component='input'
                            type='text'
                            className='form-control' 
                        />
                    </div>

                    <div class="form-group">
                        <label for="cnpj">CNPJ:</label>
                        <Field
                            required
                            name='cnpj'
                            component='input'
                            type='text'
                            className='form-control' 
                        />
                    </div>

                    <div class="form-group">
                        <label for="pessoaResponsavel">Pessoa Responsável:</label>
                        <Field
                            required
                            name='pessoaResponsavel'
                            component='input'
                            type='text'
                            className='form-control' 
                        />
                    </div>

                    <div class="form-group">
                        <label for="telefone">Telefone:</label>
                        <Field
                            required
                            name='telefone'
                            component='input'
                            type='text'
                            className='form-control' 
                        />
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <Field
                            required
                            name='email'
                            component='input'
                            type='text'
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

                    <div class="form-group">
                        <label for="endereco">Endereço:</label>
                        <Field
                            required
                            name='endereco'
                            component='input'
                            type='text'
                            className='form-control' 
                        />
                    </div>


                    <div className="form-group">
                        <label for="tipoUsuario">Tipo de Usuário</label>
                        <div className="input-group"> 
                            <Field required name="tipoUsuario" component="select" className="form-control select">
                                <option value="" disabled defaultValue>Selecione um tipo</option>
                                <option value="Instituicao" >Instituição</option>
                                <option value="Outro">Outro</option>
                            </Field>
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="tipoInstituicao">Tipo de Instituição</label>
                        <div className="input-group"> 
                            <Field required name="tipoInstituicao" component="select" className="form-control select">
                                <option value="" disabled defaultValue>Selecione um tipo</option>
                                <option value="Cientifica" >Científica</option>
                                <option value="Cultural">Cultural</option>
                            </Field>
                        </div>
                    </div>
                    

                    <button  type="submit" class="btn btn-secondary">                       
                            {loading ? 'Carregando':'Cadastrar'}
                    </button>
                </form> 
            </div>
    </div>
    )
}

export default reduxForm({form: 'formRegisterUser'})(FormRegisterUser)
