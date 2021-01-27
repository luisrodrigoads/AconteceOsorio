import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { useSelector } from 'react-redux'


const FormRegisterUser = props => {
    
    const loading = useSelector(state => state.auth.loading)
    
    const formComponents = [
        {   
            label: 'Razão Social:',
            name: 'companyName',
        },
        {   
            label: 'Nome Fantasia:',
            name: 'fantasyName',
        },
        {   
            label: 'CNPJ:',
            name: 'cnpj',
        },
        {   
            label: 'Pessoa Responsável:',
            name: 'responsiblePerson',
        },
        {   
            label: 'Telefone:',
            name: 'phone',
        },
        {   
            label: 'Endereço:',
            name: 'address',
        },
        {   
            label: 'Email:',
            name: 'email',
        },
        {   
            label: 'Senha:',
            name: 'password',
            type: 'password'
        },
    ];

    return(
        <div class="row  align-items-center justify-content-center ">
            <div class="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow">
                <form onSubmit={props.handleSubmit}>
                    
                    {formComponents.map(comp => {
                        return (
                            <div key={comp.name} class="form-group">
                                <div style={{marginRight:'8px',marginLeft:'2px'}} className="row justify-content-between">   
                                    <label for={comp.name}>{comp.label}</label>
                                    <h5 style={{color:'red'}}>*</h5>
                                </div>
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
                  
                    
                    <div className="form-group">
                        <div style={{marginRight:'8px',marginLeft:'2px'}} className="row justify-content-between">
                            <label for="userType">Tipo de Usuário:</label>
                            <h5 style={{color:'red'}}>*</h5>
                        </div>
                        <div className="input-group"> 
                            <Field required name="userType" component="select" className="form-control select">
                                <option value="INSTITUTION" defaultValue >Instituição</option>
                            </Field>
                        </div>
                    </div>

                    <div className="form-group">
                        <div style={{marginRight:'8px',marginLeft:'2px'}} className="row justify-content-between">
                            <label for="institutionType">Tipo de Instituição</label>
                            <h5 style={{color:'red'}}>*</h5>
                        </div>
                        
                        <div className="input-group"> 
                            <Field required name="institutionType" component="select" className="form-control select">
                                <option value="" disabled defaultValue>Selecione um tipo</option>
                                <option value="Cientifica" >Científica</option>
                                <option value="Cultural">Cultural</option>
                            </Field>
                        </div>
                    </div>

                    <div className="form-group">
                        <div style={{marginRight:'8px',marginLeft:'2px'}} className="row justify-content-between">
                            <label for="description">Descrição:</label>
                            <h5 style={{color:'red'}}>*</h5>
                        </div>
                        <div className="input-group"> 
                            <Field required name="description" component="textarea" rows="5"  className="form-control"/>          
                        </div>
                    </div>
                    
                    <h6 style={{color:'red'}}>Todos os campos marcados com (*) são obrigatórios.</h6>

                    <button  type="submit" class="btn btn-secondary btn-lg btn-block">                       
                            {loading ? 'Carregando':'Cadastrar'}
                    </button>
                </form> 
            </div>
    </div>
    )
}

export default reduxForm({form: 'formRegisterUser'})(FormRegisterUser)
