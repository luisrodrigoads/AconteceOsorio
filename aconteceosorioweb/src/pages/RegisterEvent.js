import { withRouter } from "react-router"
import { useDispatch } from 'react-redux';
import React, { useState } from "react";
import { postEvent } from '../actions/eventActions';

import FormData from 'form-data';

import FormRegisterCulturalActivity from './forms/FormRegisterCulturalActivity';
import FormRegisterCulturalEvent from './forms/FormRegisterCulturalEvent';

function RegisterEvent(){

    const dispatch = useDispatch();

    const [eventType, setEventType] = useState('');
    let file;

    const changeEventForm = e => {
        setEventType(e.target.value);
    }

    const renderCorrectForm = () => {
        
        switch (eventType){
            case 'cultural_activity':
                return <FormRegisterCulturalActivity onSubmit={values => handleEventForm(values)} />
            case 'cultural_event':
                return <FormRegisterCulturalEvent onChangeImage={changeImage} onSubmit={values => handleEventForm(values)} />
            default:
                return null;
        }
    }

    const changeImage = e => {
        file = e.target.files[0];
    }

    const handleEventForm = values => {

        console.log('values of form handleEventForm');
        console.log(values);

        const fd = new FormData();

        if(file !== undefined)
            fd.append('image',file);
        
                
        for(let key in values){
             if(values.hasOwnProperty(key)){
                fd.append(key, values[key]);
            }
        }
        console.log('values form data handleeventform');
        console.log([...fd])
        dispatch(postEvent(fd));

    }


    return(
        <div className="container-fluid">
            <div className="row  align-items-center justify-content-center ">
                <div className="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow">
                    <div className="form-group">
                        <label>Selecione o tipo de evento ou atividade:</label>
                        <div className="input-group">
                            <select value={eventType} onChange={changeEventForm} className="form-control select">
                                <option value="">Selecione</option>
                                <option value="cultural_activity">Atividade Cultural</option>
                                <option value="cultural_event">Evento Cultural</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            { renderCorrectForm()}

        </div>
    );

}

export default withRouter(RegisterEvent);