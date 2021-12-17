import React, { useEffect, useRef, useState } from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {createTextMask} from 'redux-form-input-masks'

import BASE_URL from '../../config/consts';
import areasOfExpertiseArtist from '../../staticData/areasOfExpertiseArtist';
import targetAudience from '../../staticData/targetAudience';
import styles from '../../styles/FormRegisterUserStyle';
import { SocialFormGroup } from './SocialFormGroup';
import SubAreasForm from './SubAreasForm';

const FormRegisterArtist = props => {

        const cnpjMask = createTextMask({pattern: '99.999.999/9999-99'})
        const phoneMask = createTextMask({pattern: '(99) 99999-9999'})
        const cpfMask = createTextMask({pattern: '999.999.999-99'})

        const [files] = useState(props.images)

        const [editArea,setEditArea] = useState(props.isUpdateForm ? false : true);

        //const subAreaSelectValue = useRef('');

        const [listAreas, setListAreas] = useState([]);
        const [textInputArea, setTextInputArea] = useState('');

        useEffect(() => {
            props.change('userType', 'ARTIST')
            //console.log('Initial values', props.initialValues);
        }, [props]);

        const addArea = () => {
            let lastItem = {area: textInputArea, subAreas:[]};
            let arr = listAreas.concat(lastItem);
            console.log(`add area ${textInputArea}`);
            console.log('new array de areas');
            console.log(arr);
            setListAreas(arr);
            setTextInputArea('');
        }

        const removeArea = (valueRemove) => {
            console.log(`remove area ${valueRemove}`);
            let newList = listAreas.filter(value => value.area !== valueRemove)
            console.log('new array de areas');
            console.log(newList);
            setListAreas(newList);
        }

        const removeSubArea = (areaValue,valueRemove) => {
            var indexArea = 0;
            var indexSubArea = 0;
            var newList = listAreas;

            for(indexArea = 0; indexArea < newList.length; indexArea++){
                 
                if(newList[indexArea].area === areaValue){

                    for(indexSubArea = 0; indexSubArea < newList[indexArea].subAreas.length; indexSubArea++){
                        
                        if(newList[indexArea].subAreas[indexSubArea] === valueRemove){
                            newList[indexArea].subAreas.splice(indexSubArea,1);
                            setListAreas(newList);
                        }

                    }
                }

            }

        }

        const addSubArea = (areaValue,subAreaText) => {
            var indexArea = 0;
            var newList = listAreas;

            for(indexArea = 0; indexArea < newList.length; indexArea++) {

                if(newList[indexArea].area === areaValue){
                    newList[indexArea].subAreas.push(subAreaText);
                    setListAreas(newList);
                }

            }

        }

        const startEditAreas = () => {
            setEditArea(true);      
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

        const renderAreas = () => {
            return (
            <>
                {/*props.initialValues && props.initialValues.areasOfExpertise.map( (field) => (
                   
                   <div style={{border: '1px solid #e6e6e6', borderRadius: '5px',padding: '5px',marginBottom: '10px', color: 'grey'}}>
                    <h4>{field.area}</h4>
                    <hr/>
                    {field.subAreas.map((sub) => (
                        <h5>{sub}</h5>
                    ))}
                   </div>
                ))*/}
            </>
            )
        }

        const filterArea = data => {
            const area = areasOfExpertiseArtist.filter(a => a.area === data)[0];
            return area.subAreas;
        } 

        const getValueOfArea = data => {
            var e = data;
            var value = e?.value;

            const ret = value ? value : 'valor vazio';
            return ret;
        }
        /*
        const renderNewAreas = () => {


            const removeSubArea = (posArea,posSubArea) => {
                console.log('remove',props.initialValues.areasOfExpertise[posArea].subAreas[posSubArea]);
                props.initialValues.areasOfExpertise[posArea].subAreas.splice(posSubArea,1);
                
            }

            return (
                <>
                    {props.initialValues && props.initialValues.areasOfExpertise.map( (field, posArea) => (
                       
                       <div style={{border: '1px solid #e6e6e6', borderRadius: '5px',padding: '5px',marginBottom: '10px', color: 'grey'}}>
                          
                        <h2>{field.area}</h2>
                        { field.subAreas.map((sub,posicao) => (
                            <div onClick={() => removeSubArea(posArea,posicao)}>
                                {sub} - X
                            </div>
                        ))}

                         <Field
                             id={`${field.area} edit`}
                             style={{marginRight:'10px'}}
                             //ref={subAreaSelectValue}
                             name={field.area}
                             component="select"
                             >
                                {
                                     filterArea(field.area).map((subarea) => {
                                         //console.log("SUBAREA", subarea);
                                         return (
                                             <option value={subarea}>{subarea}</option>
                                         ); 
                                     })
                                 }
                             </Field>
                             <button onClick={(e) => {
                                 let doc = document.getElementById(`${field.area} edit`);
                                 console.log('userefvalue',doc?.value);
                                 //e.preventDefault();
                                 field.subAreas.push(doc.value);   //NAO ESTA GERENCIANDO OS STATES CORRETAMENTE...
                             }}>
                                 Adicionar
                             </button>
                       </div>
                    ))}
                </>
            )
            
        }*/

        const renderNewAreas = () => {

            return(
                <>
                    <select
                        value={textInputArea}
                        onChange={(e)=>setTextInputArea(e.target.value)}
                    >
                        <option/>
                        {
                            areasOfExpertiseArtist.map((item)=>{
                                return(
                                    <option value={item.area}>{item.area}</option>
                                );
                            })
                        }
                    </select>
                    <button onClick={addArea}>
                        Adicionar Area
                    </button>

                    {
                        listAreas.length > 0 ?
                            listAreas.map((itemList, index)=>{
                                return(
                                    <div key={`area - ${index}`} style={{border: '1px solid black', padding: '10px'}} >
                                        <p name={itemList.area} onClick={() =>removeArea(itemList.area)}>{itemList.area}</p>
                                        <SubAreasForm addSubArea={addSubArea} removeSubArea={removeSubArea} itemList={itemList} filterArea={filterArea}/>
                                    </div>
                                );
                            })
                        : null
                    }

                </>
            );
            
        }

        const AreasOfExpertiseForm = ({fields}) => {
        
            return (
                <>
                <div style={{display:'flex',flexDirection: 'row',width:'100%',alignItems: 'center', justifyContent: 'space-between'}}>
                    <h2>Areas de atuação</h2>
                    {
                        props.isUpdateForm  ? (
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
                    onSubmit={props.handleSubmit} encType="multipart/form-data"
                >
                    
                    {formComponents.map(comp => {
                        //console.log('initialvalues',props.initialValues);
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