import React, { useEffect, useState } from 'react'
import {Field, reduxForm} from 'redux-form'
import {createTextMask} from 'redux-form-input-masks'

import BASE_URL from '../../config/consts';

import styles from '../../styles/FormRegisterUserStyle';
import { SocialFormGroup } from './SocialFormGroup';

const FormRegisterCulturalPlace = props => {

    const cnpjMask = createTextMask({pattern: '99.999.999/9999-99'})
    const phoneMask = createTextMask({pattern: '(99) 99999-9999'})

    const [files] = useState(props.images)

    useEffect(() => {
        props.change('userType', 'CULTURAL_PLACE')
    }, [props]);

    
    const renderImages = () => {
        return (
            <div>
            {
                files ?
                    files.map( (element, index) =>  
                    <img
                        key={ index }
                        style={styles.otherImage} 
                        src={ typeof(element) == 'string' ? `${BASE_URL}/${element}` : URL.createObjectURL(element) } 
                        alt="img cultural_place" />
                    )
                    :
                    null
            }
            </div>
        );
            
    }

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
            mask: cnpjMask,
        },
        {   
            label: 'Pessoa Responsável:',
            name: 'responsiblePerson',
        },
        {   
            label: 'Instituição vinculada:',
            name: 'linkedInstitution',
            required: false,
        },
        {   
            label: 'Telefone:',
            name: 'phone',
            mask: phoneMask,
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

    const formCheckComponents = [
        {
            label: 'Cobrança taxa',
            name: 'chargingFee',
        },
        {
            label: 'Possui banheiro',
            name: 'bathroom',
        },
        {
            label: 'Trocador de fraldas',
            name: 'diaperChanger',
        },
        {
            label: 'Acessibilidade à cadeirante',
            name: 'wheelchairAccessibility',
        },
    ];

    return(
        <div className="row  align-items-center justify-content-center ">
            <div className="card col-lg-6 col-md-6 col-sm-10 m-3 p-3 bg-light shadow">
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
                                
                                {
                                    comp.required === false ?
                                        <Field
                                            name={comp.name}
                                            component='input'
                                            type={comp.type ? comp.type : 'text'}
                                            autoComplete={comp.autocomplete ? comp.autocomplete : 'off'}
                                            className='form-control'  
                                        />
                                    :
                                        <Field
                                            { ...comp?.mask}
                                            required
                                            name={comp.name}
                                            component='input'
                                            type={comp.type ? comp.type : 'text'}
                                            autoComplete={comp.autocomplete ? comp.autocomplete : 'off'}
                                            className='form-control'  
                                        />
                                }
                            </div>
                        );
                    })}
                  
                    {formCheckComponents.map(compCheck => {
                        return(
                            <div key={compCheck.name}>
                                <label style={styles.labelInputCheckDiv} htmlFor={compCheck.name} className="form-check-label">{compCheck.label}</label>
                                <Field name={compCheck.name} component="input" type="checkbox"  />
                                <hr/>
                            </div>           
                        );
                    })}

                    <hr/>

                    <SocialFormGroup/>

                    <hr/>

                    <div className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">
                            <label htmlFor="description">Descrição:</label>
                            <h5 style={styles.markingRequiredInput}>*</h5>
                        </div>     
                        <div className="input-group"> 
                            <Field required name="description" value="" component="textarea" rows="5"  className="form-control"/>          
                        </div>
                    </div>
                   
                    <div className="row" style={styles.imagesRenderDiv}>
                        <h2>Imagens</h2>
                       
                    </div>

                    { renderImages()}

                    <label 
                        htmlFor="select-pictures"
                        style={styles.buttonAddImage} >Adicionar imagem</label>

                    <hr/>
                    <h5>Insira imagens do espaço cultural</h5>
                    <input id="select-pictures"
                        type="file" 
                        name="otherPictures" 
                        accept="image/png, image/jpeg" 
                        onChange={ e => props.handleImage(e) } 
                        multiple 
                        style={{ display: 'none' }} />

                    <h6 style={styles.markingRequiredInput}>Todos os campos marcados com (*) são obrigatórios.</h6>

                    <button  type="submit" className="btn btn-secondary btn-lg btn-block">{props.isUpdateForm ? 'Atualizar' : 'Cadastrar'}</button>
                </form> 
            </div>
    </div>
    )

}

export default reduxForm({form: 'formRegisterCulturalPlace', enableReinitialize: true})(FormRegisterCulturalPlace);
