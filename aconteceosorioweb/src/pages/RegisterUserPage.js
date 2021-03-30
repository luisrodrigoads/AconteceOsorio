import React, { useState } from 'react';
import { instituteSignup } from '../actions/authActions';
import FormRegisterInstitution from './forms/FormRegisterInstitution';
import { useDispatch} from 'react-redux';
import FormRegisterCulturalPlace from './forms/FormRegisterCulturalPlace';
import {withRouter} from 'react-router-dom';

import FormData from 'form-data'
import UserModel from '../models/UserModel';
import FormRegisterPromoter from './forms/FormRegisterPromoter';
import FormRegisterArtist from './forms/FormRegisterArtist';

function RegisterUserPage(){

    const dispatch = useDispatch();

    const [userType, setUserType] = useState('')

    const [files, setFiles] = useState({images: UserModel.otherPictures })

    const fileSelectedHandler = event =>{
        let images = files['images'];
        Object.values(event.target.files).map(picture => images.push(picture))
        setFiles({images})
    }

    const changeUserForm = e => {
        setUserType(e.target.value);
    }

    const renderCorrectForm = () => {

        switch (userType) {
            case 'institution':
                return <FormRegisterInstitution isUpdateForm={false} initialValues={UserModel} onSubmit={values => handleInstituteForm(values)}/>
            case 'cultural_place':
                return <FormRegisterCulturalPlace isUpdateForm={false} onSubmit={values => handleInstituteForm(values)}  handleImage = { values => fileSelectedHandler(values) }  images={ files['images'] }/>
            case 'promoter':
                return <FormRegisterPromoter isUpdateForm={false} initialValues={UserModel} onSubmit={values => handleInstituteForm(values)} />
            case 'artist':
                return <FormRegisterArtist isUpdateForm={false}  initialValues={UserModel} onSubmit={values => handleInstituteForm(values)} handleImage= { values => fileSelectedHandler(values)} images={files['images']}/>
            default: 
                return null;
        }

    }

    const handleInstituteForm = values => {

        const fd = new FormData()
            
            if(files['images'] !== undefined)
            files['images'].forEach(img => fd.append('images',img));

            for (let key in values)
                if(values.hasOwnProperty(key))
                    fd.append(key, values[key])

            
            dispatch(instituteSignup(fd))
            setFiles({ images: []})
    }
    
    return(
        <div className="container-fluid">
            <div className="row  align-items-center justify-content-center ">
                <div className="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow"> 
                    <div className="form-group">
                        <label>Selecione o tipo de usuário</label>
                        <div className="input-group">
                            <select value={userType} onChange={changeUserForm} className="form-control select">
                                <option value="">Selecione</option>
                                <option value="institution">Instituição</option>
                                <option value="cultural_place">Espaço cultural</option>
                                <option value="promoter">Promotor cultural</option>
                                <option value="artist">Artista</option>
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