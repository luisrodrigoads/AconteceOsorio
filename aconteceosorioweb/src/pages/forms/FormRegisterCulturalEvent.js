import React, { useEffect } from 'react'
import {Field, reduxForm} from 'redux-form'

import styles from '../../styles/FormRegisterUserStyle';

const FormRegisterCulturalEvent = props => {

    useEffect(() => {
        props.change('eventType','CULTURAL_EVENT')
    },[props]);

    const formComponents = [
        {   
            label: 'Titulo:',
            name: 'eventTitle',
        }
    ]

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

                    <hr/>

                    <div className="form-group">
                        <div style={styles.labelInputDiv} className="row justify-content-between">
                            <label htmlFor="eventDescription">Descrição:</label>
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
    form: 'formRegisterCulturalEvent',
    enableReinitialize: true
})(FormRegisterCulturalEvent)