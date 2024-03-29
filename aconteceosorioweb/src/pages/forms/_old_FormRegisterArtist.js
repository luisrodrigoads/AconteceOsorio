import React, { useEffect, useState } from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {createTextMask} from 'redux-form-input-masks'

import BASE_URL from '../../config/consts';
import areasOfExpertiseArtist from '../../staticData/areasOfExpertiseArtist';
import targetAudience from '../../staticData/targetAudience';
import styles from '../../styles/FormRegisterUserStyle';
import { SocialFormGroup } from './SocialFormGroup';

const FormRegisterArtist = props => {

        const cnpjMask = createTextMask({pattern: '99.999.999/9999-99'})
        const phoneMask = createTextMask({pattern: '(99) 99999-9999'})
        const cpfMask = createTextMask({pattern: '999.999.999-99'})

        const [files] = useState(props.images)

        const [editArea,setEditArea] = useState(props.isUpdateForm ? false : true);

        useEffect(() => {
            props.change('userType', 'ARTIST')
            console.log('Initial values', props.initialValues);
        }, [props]);

        const startEditAreas = () => {
            setEditArea(true);
            // props.initialValues.areasOfExpertiseArtist = [];
            console.log('areasofexpertise',props.initialValues.areasOfExpertiseArtist);
        }

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

         const renderSubAreas = ({fields, data}) => {
            return (

                 <>
                     <button className="btn btn-info" type="button" onClick={() => fields.push({name: 'Teste'})}>
                         Adicionar SubArea
                    </button>
                    <hr/>
                    
                 {fields && 
                 <pre>
                    {/* JSON.stringify(props.initialValues.areasOfExpertise[fields.name], null, 2) */}
                    {JSON.stringify(fields, null, 2)}
                 </pre>
                 }
                 {/*
                 fields.map((subAreaArtist, index) => (
                
                 <div key={index} className="form-group" style={{backgroundColor:'#eee',padding:'5px'}}>
                     <div className="row justify-content-around">
                         <div>
                             <Field
                                 name={subAreaArtist}
                                 component="select"
                                 style={{marginLeft:'30px',marginRight:'10px'}}
                             >
                                 {/*<option></option>/}
                                 {
                                    
                                     filterArea(getValueOfArea(data)) && 
                                         (
                                             filterArea(getValueOfArea(data))[0].subAreas.map((sub) => {

                                                 return (
                                                     <option value={sub}>{sub}</option>
                                                 );
                                             })
                                             
                                         )
                                     
                                 }
                             </Field>
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
                    */}
                 </>
             )
         }

         const renderNewAreas = ({fields}) => (

             <>
             <button className="btn btn-info" type="button" onClick={() => fields.push({})}>
                 Adicionar Área
             </button>
            
            <h2>Render New Areas</h2>
             <pre>
                {JSON.stringify(fields, null, 2)}
            </pre>
                
             {fields && props.initialValues.areasOfExpertise.map((areaArtist, index) => {

             return (
                 <div key={index} style={{backgroundColor:'#efefef'}} className="form-group">
                     <div  style={{padding:'5px',marginTop:'20px',marginLeft:'5px',marginRight:'5px'}} className="row">
                         <div >
                             <h4 style={{marginRight:'10px'}}>Área</h4>
                         </div>
                         <div >
                             <Field
                             id={index}
                             style={{marginRight:'10px'}}
                             name={`${areaArtist}.area`}
                             component="select"
                             >
                                 {/* <option></option> */}
                                 {
                                     areasOfExpertiseArtist.map((a) => {
                                         return (
                                             <option value={a.area}>{a.area}</option>
                                         ); 
                                     })
                                 }
                             </Field>
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
                 <FieldArray name={`${areaArtist[index]}.subAreas`} data={document.getElementById(index)} component={renderSubAreas} />
                 </div>
             )}
             )}
             </>
         )



        const filterArea = data => {
            return areasOfExpertiseArtist.filter(function (a) {
                if(a.area === data)
                    return a.subAreas;
            })
        } 

        const getValueOfArea = data => {
            var e = data;
            var value = e?.value;

            const ret = value ? value : 'valor vazio';
            return ret;
        }

        const renderAreas = () => {
            return (
                <>
                    {props.initialValues && props.initialValues.areasOfExpertise.map( (field) => (
                       
                       <div style={{border: '1px solid #e6e6e6', borderRadius: '5px',padding: '5px',marginBottom: '10px', color: 'grey'}}>
                        <h4>{field.area}</h4>
                        <hr/>
                        {field.subAreas.map((sub) => (
                            <h5>{sub}</h5>
                        ))}
                       </div>
                    ))}
                </>
            )
            
        }


        const AreasOfExpertiseForm = ({fields}) => {
        
            return (
                <>
                <pre>
                    AreasOfExpertiseForm
                    Fields:
                    {JSON.stringify(fields, null, 2)}
                    Initial Values:
                    {JSON.stringify(props.initialValues.areasOfExpertise, null, 2)}

                </pre>
                <div style={{display:'flex',flexDirection: 'row',width:'100%',alignItems: 'center', justifyContent: 'space-between'}}>
                    <h2>Areas de atuação</h2>
                    {
                        props.isUpdateForm ? (
                            <button
                            className="btn btn-warning"
                            style={{color: 'white'}}
                            onClick={() => {startEditAreas()}}
                            >
                                Editar
                            </button>
                        ) : (
                            null
                        )
                    }
                    
                </div> 
                {
                    editArea ? <FieldArray name="areasOfExpertise" component={renderNewAreas} /> 
                        : <FieldArray name="areasOfExpertise" component={renderAreas} />
                } 
                      
            
                </>
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
                        component="select" 
                        >
                            {/*<option></option>*/}   
                            {
                                targetAudience.map((age) => {
                                    props.initialValues?.targetAudience.map((ta) => {
                                        if(age === ta)
                                            return <option selected value={age} >{age}</option>
                                    })
                                    return(
                                        <option value={age} >{age}</option>
                                    );
                                })
                            }
                        </Field>

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
                        console.log('initialvalues',props.initialValues);
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