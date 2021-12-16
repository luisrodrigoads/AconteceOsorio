import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { DateTimePicker } from 'react-widgets';
import {Field, reduxForm} from 'redux-form'
import moment from 'react-widgets-moment'
import momentLocaliser from 'react-widgets-moment'
import BASE_URL from '../../config/consts'

import 'react-widgets/dist/css/react-widgets.css'
import styles from '../../styles/FormRegisterUserStyle';

const FormRegisterCulturalEvent = props => {

    const [institutions,setInstitutions] = useState([]);
    const [culturalPlaces,setCulturalPlaces] = useState([]);
    const [isFree,setIsFree] = useState(false);
    const [acessibility,setAcessibility] = useState(false);

    function toogle(value) {
        return !value;
    }

    const getDataOptions = () => {

        axios
            .get(`${BASE_URL}/instituteOptions`)
            .then(response => {
                setInstitutions(response.data);
            })
            .catch(error => console.error('Internal server error!'))

        axios
            .get(`${BASE_URL}/culturalPlaceOptions`)
            .then(response => {
                setCulturalPlaces(response.data);
            })
            .catch(error => console.error('Internal server error!'))
    }

    useEffect(() => {
        props.change('eventType','CULTURAL_EVENT')
        getDataOptions();
        momentLocaliser(moment);
    },[props]);

    const renderDatePicker = ({input: { onChange, value}, showTime,placeholder}) =>
            <DateTimePicker 
                onChange={onChange}
                format="DD MMM YYYY"
                time={showTime}
                value={ !value ? null : new Date(value) }
                placeholder={placeholder}
            />

    const formComponents = [
        {   
            label: 'Titulo:',
            name: 'eventTitle',
        },
        {
            label: 'Contato',
            name: 'contact',
        },
        {
            label: 'Link do evento',
            name: 'socialNetworkLink',
        },
        {
            label: 'Lotação maxima',
            name: 'publicCapacity',
        },
        {
            label: 'Faixa etária',
            name: 'ageRating',
        }
    ]

    return(
        <div className="row  align-items-center justify-content-center ">
            <div className="card col-lg-6 col-md-6 col-sm-10 m-3 p-3 bg-light shadow">
                <form
                    initialvalues={props.initialValues ? props.initialValues : ''}
                    onSubmit={props.handleSubmit}
                    encType="multipart/form-data"
                >
                    
                    {formComponents.map(comp => {
                        return (
                            <div key={comp.name} className="form-group">
                                <div style={styles.labelInputDiv} className="row justify-content-between">   
                                    <label htmlFor={comp.name}>{comp.label}</label>
                                    <h5 style={styles.markingRequiredInput}>*</h5>
                                </div>
                                <Field
                                    { ...comp?.mask}
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
                    

                    <div key='relatedInstitution' className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">   
                            <label htmlFor='relatedInstitution'>Instituição vinculada</label>
                            <h5 style={styles.markingRequiredInput}>*</h5>
                        </div>
                        <Field
                            name='relatedInstitution'
                            component='input'
                            type='text'
                            className='form-control'
                            list="institutions-data"
                        />
                        <datalist id="institutions-data">
                            {
                                institutions.map((item,key)=>{
                                   return <option key={key} value={item.fantasyName} />;
                                })
                            }
                        </datalist>
                    </div>

                    <div key='address' className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">   
                            <label htmlFor='address'>Local</label>
                            <h5 style={styles.markingRequiredInput}>*</h5>
                        </div>
                        <Field
                            name='address'
                            component='input'
                            type='text'
                            className='form-control'
                            list="places-data"
                        />
                        <datalist id="places-data">
                            {
                                culturalPlaces.map((item,key)=>{
                                   return <option key={key} value={item.fantasyName} />;
                                })
                            }
                        </datalist>
                    </div>

                    <hr/>

                    <div key='dateStart' className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">   
                            <label htmlFor='dateStart'>Data inicial</label>
                            <h5 style={styles.markingRequiredInput}>*</h5>
                        </div>
                        <Field
                            required
                            showTime={false}
                            name='dateStart'
                            component={renderDatePicker}
                            placeholder='Data inicial'
                        />
                    </div>

                    <div key='dateEnd' className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">   
                            <label htmlFor='dateEnd'>Data final</label>
                        </div>
                        <Field
                            showTime={false}
                            name='dateEnd'
                            component={renderDatePicker}
                            placeholder='Data final'
                        />
                    </div>

                    <hr/>

                    <div >
                        <label style={styles.labelInputCheckDiv} htmlFor="isFree" className="form-check-label">Gratuito</label>
                        <input name="isFree" type="checkbox" checked={isFree} onChange={e => setIsFree(toogle)}/>
                    </div>

                    {
                        isFree ? 
                            null
                            : 
                            <>
                            <div key='ticketPrice.value' className="form-group">
                                <div style={styles.labelInputDiv} className="row justify-content-between">   
                                    <label htmlFor='ticketPrice.value'>Valor ingresso</label>
                                </div>
                                <Field
                                    name='ticketPrice.value'
                                    component='input'
                                    type='text'
                                    className='form-control'
                                />
                            </div>

                            <div key='ticketPrice.moreInformation' className="form-group">
                                <div style={styles.labelInputDiv} className="row justify-content-between">
                                    <label htmlFor="ticketPrice.moreInformation">Informações sobre o ingresso:</label>
                                </div>
                                <div className="input-group"> 
                                    <Field name="ticketPrice.moreInformation" component="textarea" rows="5"  className="form-control"/>          
                                </div>
                            </div>
                            </> 
                    
                    }
                    
                    <hr/>

                    <div >
                        <label style={styles.labelInputCheckDiv} htmlFor="acessibility" className="form-check-label">Há acessibilidade</label>
                        <input name="acessibility" type="checkbox" checked={acessibility} onChange={e => setAcessibility(toogle)}/>
                    </div>

                    {
                            acessibility ? 
                            <div key='accessibilityDescription' className="form-group">
                                <div style={styles.labelInputDiv} className="row justify-content-between">
                                    <label htmlFor="accessibilityDescription">Descrição da politica de acessiblidade:</label>
                                </div>
                                <div className="input-group"> 
                                    <Field name="accessibilityDescription" component="textarea" rows="5"  className="form-control"/>          
                                </div>
                            </div>
                            : 
                            null
                    }
                    
                    <hr/>

                    <input
                        type="file" 
                        name="file"
                        accept="image/png, image/jpeg"
                        onChange={props.onChangeImage}
                    />
                    <hr/>

                    <div className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">
                            <label htmlFor="eventDescription">Descrição:</label>
                            <h5 style={styles.markingRequiredInput}>*</h5>
                        </div>
                        <div className="input-group"> 
                            <Field required name="eventDescription" component="textarea" rows="5"  className="form-control"/>          
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
    form: 'formRegisterCulturalEvent',
    enableReinitialize: true
})(FormRegisterCulturalEvent)