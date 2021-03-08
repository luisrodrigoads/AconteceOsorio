import React, { useEffect } from 'react'
import {Field, reduxForm} from 'redux-form'

import styles from '../../styles/FormRegisterUserStyle';
import { SocialFormGroup } from './SocialFormGroup';

const FormRegisterUser = props => {
    
    useEffect(() => {
        props.change('userType', 'INSTITUTION')
    }, [props]);

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
            type: 'password',
            autocomplete: 'on'
        },
    ];

    return(
        <div className="row  align-items-center justify-content-center ">
            <div className="card col-lg-6 col-md-6 col-sm-10 m-3 p-3 bg-light shadow">
                <form
                    initialvalues={props.initialValues}
                    onSubmit={props.handleSubmit}
                >
                    
                    {formComponents.map(comp => {
                        return (
                            <div key={comp.name} className="form-group">
                                <div style={styles.labelInputDiv} className="row justify-content-between">   
                                    <label htmlFor={comp.name}>{comp.label}</label>
                                    <h5 style={styles.markingRequiredInput}>*</h5>
                                </div>
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

                    <div className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">
                            <label htmlFor="institutionType">Tipo de Instituição</label>
                        </div>
                        
                        <div className="input-group"> 
                            <Field name="institutionType" component="select" className="form-control select">
                                <option value="" disabled defaultValue>Selecione um tipo</option>
                                <option value="Cientifica" >Científica</option>
                                <option value="Cultural">Cultural</option>
                            </Field>
                        </div>
                    </div>

                    <hr/>
                    
                    <SocialFormGroup/>

                    <hr/>

                    <div className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">
                            <label htmlFor="description">Descrição:</label>
                            <h5 style={styles.markingRequiredInput}>*</h5>
                        </div>
                        <div className="input-group"> 
                            <Field required name="description" component="textarea" rows="5"  className="form-control"/>          
                        </div>
                    </div>
                    
                    <h6 style={styles.markingRequiredInput}>Todos os campos marcados com (*) são obrigatórios.</h6>

                    <button  type="submit" className="btn btn-secondary btn-lg btn-block">{props.isUpdateForm ? 'Atualizar' : 'Cadastrar'}</button>

                </form> 
            </div>
    </div>
    )
}


export default reduxForm({
    form: 'formRegisterUser',
    enableReinitialize: true
})(FormRegisterUser);
