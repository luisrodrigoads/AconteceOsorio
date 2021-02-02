import React, { useState } from 'react';
import { instituteSignup } from '../actions/authActions';
import HeaderPage from './componentsPage/HeaderPage';
import FormRegisterInstitution from './forms/FormRegisterInstitution';
import { useDispatch} from 'react-redux';
import FormRegisterCulturalPlace from './forms/FormRegisterCulturalPlace';
import {withRouter} from 'react-router-dom';

import FormData from 'form-data'

function RegisterUserPage(){

    const dispatch = useDispatch();

    const [userType, setUserType] = useState('')

    const [files, setFiles] = useState({ otherPictures: [] })

    const fileSelectedHandler = event =>{
        let otherPictures = files['otherPictures']
        Object.values(event.target.files).map(picture => otherPictures.push(picture))
        setFiles({otherPictures})
    }

    const changeUserForm = e => {
        setUserType(e.target.value);
    }

    const renderCorrectForm = () => {

        switch (userType) {
            case 'institution':
                return <FormRegisterInstitution onSubmit={values => handleInstituteForm(values)}/>
            case 'cultural_place':
                return <FormRegisterCulturalPlace onSubmit={values => handleInstituteForm(values)}  handleImage = { values => fileSelectedHandler(values) }  otherPictures={ files['otherPictures'] }/>
            default: 
                return null;
        }

    }

    const handleInstituteForm = values => {

        const fd = new FormData()
            
            if(files['otherPictures'] !== undefined)
                files['otherPictures'].forEach(img => fd.append('otherPictures',img))

            for (let key in values)
                if(values.hasOwnProperty(key))
                    fd.append(key, values[key])

            setFiles({ otherPictures: []})
            dispatch(instituteSignup(fd))
        
        //dispatch(instituteSignup(data))
    }
    
    return(
        <div className="container-fluid">
            <HeaderPage urlPath="/" textButton="Voltar"/>

            <div className="row  align-items-center justify-content-center ">
                <div className="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow"> 
                    <div className="form-group">
                        <label>Selecione o tipo de usuário</label>
                        <div className="input-group">
                            <select value={userType} onChange={changeUserForm} className="form-control select">
                                <option value="">Selecione</option>
                                <option value="institution">Instituição</option>
                                <option value="cultural_place">Espaço cultural</option>
                                <option value="other">Outro</option>
                            </select>
                        </div>
                    </div>    
                </div>
            </div>
 
            { renderCorrectForm() }
            
        </div>
    );
}

export default withRouter(RegisterUserPage);