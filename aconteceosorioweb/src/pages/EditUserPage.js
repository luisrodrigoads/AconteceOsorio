import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { withRouter } from 'react-router-dom'
import { updateUser } from '../actions/userActions';
import FormRegisterCulturalPlace from './forms/FormRegisterCulturalPlace';
import FormRegisterInstitution from './forms/FormRegisterInstitution';

function EditUserPage(){

    const user  =  useSelector(state => state.user.personalInfo);

    const dispatch = useDispatch();

    const updateHandle = values => {
        dispatch(updateUser(values))
    }

    const renderCorrectForm = () => {
        switch (user.userType) {
            case 'INSTITUTION':
                return <FormRegisterInstitution isUpdateForm={true} initialValues={user} onSubmit={values => updateHandle(values)}/>
            case 'CULTURAL_PLACE':
                return <FormRegisterCulturalPlace onSubmit={values => updateHandle(values)}/>
            default:
                return null;
        }
    }

    return(
        <div className="container-fluid">
            {renderCorrectForm()}
        </div>
    );

}

export default withRouter(EditUserPage);