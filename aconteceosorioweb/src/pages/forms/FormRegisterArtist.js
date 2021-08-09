import React, { useEffect, useState } from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {createTextMask} from 'redux-form-input-masks'

import BASE_URL from '../../config/consts';
import styles from '../../styles/FormRegisterUserStyle';
import { SocialFormGroup } from './SocialFormGroup';

const FormRegisterArtist = props => {

    const cnpjMask = createTextMask({pattern: '99.999.999/9999-99'})
    const phoneMask = createTextMask({pattern: '(99) 99999-9999'})
    const cpfMask = createTextMask({pattern: '999.999.999-99'})

    const [files] = useState(props.images)

    useEffect(() => {
        props.change('userType', 'ARTIST')
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

        const renderSubAreas = ({fields}) => (
            <>
                <button className="btn btn-info" type="button" onClick={() => fields.push()}>
                    Adicionar SubArea
                </button>
            <hr/>
                 
            {fields.map((subAreaArtist, index) => (
            
            <div key={index} className="form-group" style={{backgroundColor:'#eee',padding:'5px'}}>
                <div className="row justify-content-around">
                    <div>
                        <Field
                            name={subAreaArtist}
                            type="text"
                            component={renderField}
                            placeholder="subarea"
                            style={{marginLeft:'30px',marginRight:'10px'}}
                        />
                    </div>
                    <div>
                        <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => fields.remove(index)}
                        >
                            X
                        </button>
                    </div>
                    
                </div>
            </div>
            
            ))}
            
            </>
        )

        const renderAreas = ({fields}) => (
            <>
            <button className="btn btn-info" type="button" onClick={() => fields.push({})}>
                Adicionar Área
            </button>
            
            {fields.map((areaArtist, index) => (
            <div key={index} style={{backgroundColor:'#efefef'}} className="form-group">
                <div  style={{padding:'5px',marginTop:'20px',marginLeft:'5px',marginRight:'5px'}} className="row">
                    <div >
                        <h4 style={{marginRight:'10px'}}>Área</h4>
                    </div>
                    <div >
                        <Field
                        style={{marginRight:'10px'}}
                        name={`${areaArtist}.area`}
                        type="text"
                        placeholder="area"
                        component={renderField}
                        />
                    </div>
                    <div>
                        <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => fields.remove(index)}
                        >
                            X
                        </button>
                    </div>
                </div>
                <FieldArray name={`${areaArtist}.subAreas`} component={renderSubAreas} />
            </div>
            ))}
            </>
        )

        const AreasOfExpertiseForm = () => {
        
            return (  
                <FieldArray name="areasOfExpertise" component={renderAreas} />      
            )
        }

        const renderField = ({ input, type ,placeholder}) => (
            <>
              <input {...input} type={type} placeholder={placeholder} />
            </>
          )

        const renderTargetAudience = ({fields}) => (
            <>
            <button className="btn btn-info" type="button" onClick={() => fields.push({})}>
                Adicionar Público alvo
            </button>
            
            {fields.map((ageAudience, index) => (
            <div key={index} style={{backgroundColor:'#efefef'}} className="form-group">
                <div  style={{padding:'5px',marginTop:'20px',marginLeft:'5px',marginRight:'5px'}} className="row">
                 
                    <div >
                        <Field
                        style={{marginRight:'10px'}}
                        name={ageAudience}
                        type="text"
                        component={renderField}
                        placeholder="Faixa etaria" 
                        />
                    </div>
                    <div>
                        <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => fields.remove(index)}
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
            ))}
            </>
        )

        const ArrayFormTargetAudience = () =>{
            return (
                <FieldArray name="targetAudience" component={renderTargetAudience}/>
            )
        }

        const renderPortfolioLinks = ({fields}) =>(
            <>
            <button className="btn btn-info" type="button" onClick={() => fields.push({})}>
                Adicionar Link Portfolio 
            </button>
            
            {fields.map((portLink, index) => (
            <div key={index} style={{backgroundColor:'#efefef'}} className="form-group">
                
                    <div  style={{padding:'5px',marginTop:'20px',marginLeft:'5px',marginRight:'5px'}} className="row">
                    
                        <div >
                            <Field
                            style={{marginRight:'10px'}}
                            name={`${portLink}.title`}
                            type="text"
                            component={renderField}
                            placeholder="Título" 
                            />
                        </div>
                        
                    </div>
                    <div  style={{padding:'5px',marginTop:'20px',marginLeft:'5px',marginRight:'5px'}} className="row">
                    
                        <div >
                            <Field
                            style={{marginRight:'10px'}}
                            name={`${portLink}.urlLink`}
                            type="text"
                            component={renderField}
                            placeholder="www.meuportfolio.com" 
                            />
                        </div>
                        
                    </div>
                    <div>
                        <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() => fields.remove(index)}
                        >
                            X
                        </button>
                    </div>
                
                <hr/>
            </div>
            ))}
            </>
        )

        const ArrayFormPortfolioLinks = () =>{
            return (
                <FieldArray name="portfolioLinks" component={renderPortfolioLinks}/>
            )
        }

    const formComponents = [
        {   
            label: 'Nome pessoal:',//personal name
            name: 'companyName',
        },
        {   
            label: 'Nome Artístico:',//artistic name
            name: 'fantasyName',
        },
        {   
            label: 'CPF:',
            name: 'cpf',
            mask: cpfMask,
        },
        {   
            label: 'CNPJ:',
            name: 'cnpj',
            required: false,
            mask: cnpjMask,
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

    return(
        <div className="row  align-items-center justify-content-center ">
            <div className="card col-lg-6 col-md-6 col-sm-10 m-3 p-3 bg-light shadow">
                <h2>Dados Gerais</h2>
                <form
                    initialvalues={props.initialValues ? props.initialValues : ''}
                    onSubmit={props.handleSubmit} 
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
                                            { ...comp?.mask}
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

                    
                    <hr/>
                    
                    <SocialFormGroup />

                    <hr/>

                    <AreasOfExpertiseForm />

                   <hr/>

                   <ArrayFormTargetAudience />

                    <hr/>
                   <ArrayFormPortfolioLinks />
                  
                    <div className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">
                            <label htmlFor="description">Descrição:</label>
                            <h5 style={styles.markingRequiredInput}>*</h5>
                        </div>
                        <div className="input-group"> 
                            <Field required name="description" component="textarea" rows="5"  className="form-control"/>          
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
                    <h5>Insira imagens do seu trabalho</h5>
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

export default reduxForm({
    form: 'formRegisterArtist',
    enableReinitialize: true
})(FormRegisterArtist);