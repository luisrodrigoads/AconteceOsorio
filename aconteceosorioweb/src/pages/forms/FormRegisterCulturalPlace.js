import React, { useEffect, useState } from 'react'
import {Field, reduxForm} from 'redux-form'

import styles from '../../styles/FormRegisterUserStyle';

const FormRegisterCulturalPlace = props => {


    useEffect(() => {
        props.change('userType', 'CULTURAL_PLACE')
        console.log(files)
    }, [props]);

    const [files] = useState(props.otherPictures)

    const renderImages = () => {
        files.map((element, index) =>
            <img
                key={ index }
                style={styles.otherImage} 
                src={ URL.createObjectURL(element) } 
                alt="img cultural_place" />)
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
        },
        {   
            label: 'Pessoa Responsável:',
            name: 'responsiblePerson',
        },
        {   
            label: 'Instituição vinculada:',
            name: 'linkedInstitution',
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
            <div className="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow">
                <form
                    initialvalues={props.initialValues ? props.initialValues : ''}
                    onSubmit={props.handleSubmit} encType="multipart/form-data"
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
                                    className='form-control'
                                />
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
                        { renderImages()}
                    </div>

                    <label 
                        htmlFor="select-pictures"
                        style={styles.buttonAddImage} >Adicionar imagem</label>

                    <hr/>
                    <h5>Insira imagens do espaço cultural</h5>
                    <input id="select-pictures"
                        type="file" 
                        name="otherPictures" 
                        accept="image/png, image/jpeg" 
                        onChange={ props.handleImage } 
                        multiple 
                        style={{ display: 'none' }} />

                    <h6 style={styles.markingRequiredInput}>Todos os campos marcados com (*) são obrigatórios.</h6>

                    <button  type="submit" className="btn btn-secondary btn-lg btn-block">{props.isUpdateForm ? 'Atualizar' : 'Cadastrar'}</button>
                </form> 
            </div>
    </div>
    )

}

export default reduxForm({form: 'formRegisterCulturalPlace'})(FormRegisterCulturalPlace);
