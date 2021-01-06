import React, { useState } from 'react';
import { instituteSignup } from '../actions/authActions';
import HeaderPage from './componentsPage/HeaderPage';
import FormRegisterInstitution from './forms/FormRegisterInstitution';
import { useDispatch} from 'react-redux';
import FormRegisterCulturalPlace from './forms/FormRegisterCulturalPlace';


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
            case 'cultural_place':
                return <FormRegisterCulturalPlace onSubmit={values => handleInstituteForm(values)} />
            default: 
                return null;
        }

    }

    const handleInstituteForm = data => {
        console.log("FORM HANDLED")
        console.log(data);
        dispatch(instituteSignup(data))
    }
    
    return(
        <div class="container-fluid">
            <HeaderPage urlPath="/" textButton="Voltar"/>

            <div class="row  align-items-center justify-content-center ">
                <div class="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow"> 
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