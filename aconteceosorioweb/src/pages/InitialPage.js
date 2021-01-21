import React from 'react';
import { useSelector } from 'react-redux';
import HeaderPage from './componentsPage/HeaderPage';
import ListOfEvents from './componentsPage/ListOfEvents';

export default function InitialPage () {
    
    const user = useSelector(state => state.user.personalInfo);

    console.log(user)

    return(
        <div class="container-fluid">
            <HeaderPage 
                urlPath={ user._id == '' ? "/LoginPage" : '/Logout' }
                textButton= { user._id == '' ? "Entrar" : "Sair" }  
                name={user.fantasyName}/>
            
            <div class="row justify-content-around" style={{marginTop:'15px'}}>
                <div class="col-lg-1 col-md-2 col-sm-2 col-5 m-2 bg-light shadow-sm">
                    <h6>Eventos</h6>
                </div>
                <div class="col-lg-1 col-md-2 col-sm-2 col-5 m-2 bg-light shadow-sm">
                    <h6>Artistas</h6>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 col-6 m-2 bg-light shadow-sm">
                    <h6>Prestadores de serviços</h6>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 col-4 m-2 bg-light shadow-sm">
                    <h6>Espaços Culturais</h6>
                </div>
                <div class="col-lg-1 col-md-3 col-sm-3 m-2 col-4 bg-light shadow-sm">
                    <h6>Instituições</h6>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-4 col-6 m-2 bg-light shadow-sm">
                    <h6>Promotores de eventos</h6>
                </div>
            </div>
            <hr/>
            <ListOfEvents/>
        </div>
    );
    
}