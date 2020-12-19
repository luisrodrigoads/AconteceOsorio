import React, { useState } from 'react';
import { instituteSignup } from '../actions/authActions';
import HeaderPage from './componentsPage/HeaderPage';
import FormRegisterInstitution from './forms/FormRegisterInstitution';
import { useDispatch} from 'react-redux';


export default function RegisterUserPage(){

    const dispatch = useDispatch();

    const [userType, setUserType] = useState('')

    const changeUserForm = e => {
        setUserType(e.target.value);
    }

    const renderCorrectForm = () => {

        switch (userType) {
            case 'institution':
                return <FormRegisterInstitution onSubmit={values => handleInstituteForm(values)}/>
            default: 
                return null;
        }

    }

    const handleInstituteForm = data => {
        console.log(data);
        dispatch(instituteSignup(data))
    }
    
    return(
        <div class="container-fluid">
            <HeaderPage urlPath="/" textButton="Voltar"/>

            <br/>
            <label>
                Selecione o tipo de usuário
                <select value={userType} onChange={changeUserForm}>
                    <option value="">Selecione</option>
                    <option value="institution">Instituição</option>
                    <option value="other">Outro</option>
                </select>
            </label>
            { renderCorrectForm() }
            
        </div>
    );
}