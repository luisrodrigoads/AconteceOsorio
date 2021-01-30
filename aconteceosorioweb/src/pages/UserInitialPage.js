import React from 'react'
import { useSelector } from 'react-redux';
import HeaderPage from './componentsPage/HeaderPage';
import {withRouter} from 'react-router-dom';
import InstitutionInitialPage from './componentsPage/InstitutionInitialPage';
import CulturalPlaceInitialPage from './componentsPage/CulturalPlaceInitialPage';


function UserInitialPage () {

    const user = useSelector(state => state.user.personalInfo);
    console.log('username: ',user.userType);

    const renderCorrectUserPage = () => {

        switch(user.userType){
            case 'INSTITUTION':
                return <InstitutionInitialPage User={user} />;
            case 'CULTURAL_PLACE':
                return <CulturalPlaceInitialPage User={user} />;
            default:
                return <h1>Ocorreu um erro na aplicação, tente mais tarde.</h1>;
        }
    }

    return (

        <div class="container-fluid">
            <HeaderPage urlPath="/Logout" textButton="Sair"/>
            {renderCorrectUserPage()}
        </div>

    );
}

export default withRouter(UserInitialPage);

