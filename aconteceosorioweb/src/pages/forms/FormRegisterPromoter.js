import React, {useEffect, useState} from 'react'
import {Field, reduxForm} from 'redux-form'

import styles from '../../styles/FormRegisterUserStyle';
import { SocialFormGroup } from './SocialFormGroup';

const FormRegisterPromoter = props => {

    useEffect(() => {
        props.change('userType','PROMOTER')
    },[props]);

    
    const formComponents = [
       
        {   
            label: 'Nome Fantasia:',
            name: 'fantasyName',
        },
        {   
            label: 'CPF:',
            name: 'cpf',
        },
        {   
            label: 'CNPJ:',
            name: 'cnpj',
            required: false,
        },
        {   
            label: 'Telefone:',
            name: 'phone',
        },
        {   
            label: 'Email:',
            name: 'email',
        },
        {   
            label: 'Endereço:',
            name: 'address',
        },
        {   
            label: 'Instituição vinculada:',
            name: 'linkedInstitution',
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
                <h2>Dados Gerais</h2>
                <form
                    initialvalues={props.initialValues ? props.initialValues : ''}
                    onSubmit={props.handleSubmit} encType="multipart/form-data"
                >
                    
                    {formComponents.map(comp => {
                        return (
                            <div key={comp.name} className="form-group">
                                <div style={styles.labelInputDiv} className="row justify-content-between">   
                                    <label htmlFor={comp.name}>{comp.label}</label>
                                    {
                                        comp.required === false ? null : <h5 style={styles.markingRequiredInput}>*</h5>
                                    }
                                    
                                </div>
                                <Field
                                    required={comp.required ? comp.required : true}
                                    name={comp.name}
                                    component='input'
                                    type={comp.type ? comp.type : 'text'}
                                    autoComplete={comp.autocomplete ? comp.autocomplete : 'off'}
                                    className='form-control'
                                />
                            </div>
                        );
                    })}

                    
                    <hr/>
                    
                    <SocialFormGroup />

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
    form: 'formRegisterPromoter',
    enableReinitialize: true
})(FormRegisterPromoter);