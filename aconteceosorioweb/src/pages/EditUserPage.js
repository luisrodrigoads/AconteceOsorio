import React, { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { withRouter } from 'react-router-dom'
import { updateUser } from '../actions/userActions';
import FormRegisterCulturalPlace from './forms/FormRegisterCulturalPlace';
import FormRegisterInstitution from './forms/FormRegisterInstitution';

import FormData from 'form-data'

function EditUserPage(){

    const user  =  useSelector(state => state.user.personalInfo);

    const dispatch = useDispatch();

    const [files, setFiles] = useState(user.otherPictures)

    const updateHandle = values => {
        dispatch(updateUser(values))
    }

    const fileSelectedHandler = event =>{
        let otherPictures = files
        Object.values(event.target.files).map(picture => otherPictures.push(picture))
        setFiles({otherPictures})
    }

    const updateHandleFormData = values => {
        const fd = new FormData()


        if(files !== undefined)
        files.forEach(img => fd.append(files,img))

        for (let key in values)
            if(values.hasOwnProperty(key))
                fd.append(key, values[key])

        setFiles(user.otherPictures)
        dispatch(updateUser(fd))
    }

    const renderCorrectForm = () => {
        switch (user.userType) {
            case 'INSTITUTION':
                return <FormRegisterInstitution isUpdateForm={true} initialValues={user} onSubmit={values => updateHandle(values)}/>
            case 'CULTURAL_PLACE':
                return <FormRegisterCulturalPlace isUpdateForm={true} initialValues={user} onSubmit={values => updateHandleFormData(values)} handleImage={values => fileSelectedHandler(values)} otherPictures={files}/>
            default:
                return null;
        }
    }

    return(
        <div className="container-fluid">
            { renderCorrectForm() }
        </div>
    );

}

export default withRouter(EditUserPage);