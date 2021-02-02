import React from 'react';
import { useSelector } from 'react-redux';
import HeaderPage from './componentsPage/HeaderPage';
import ListOfEvents from './componentsPage/ListOfEvents';
import {withRouter} from 'react-router-dom';

import styles from '../styles/InitialPageStyle';


function InitialPage () {
    
    const user = useSelector(state => state.user.personalInfo);

    return(
        <div className="container-fluid">
            <HeaderPage 
                urlPath={ user._id === '' ? "/LoginPage" : '/Logout' }
                textButton= { user._id === '' ? "Entrar" : "Sair" }  
                name={user.fantasyName}/>
            
            <div className="row justify-content-around" style={styles.typeOfDataDiv}>
                <div className="col-lg-1 col-md-2 col-sm-2 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Eventos</h6>
                </div>
                <div className="col-lg-1 col-md-2 col-sm-2 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Artistas</h6>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Prestadores de serviços</h6>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Espaços Culturais</h6>
                </div>
                <div className="col-lg-1 col-md-3 col-sm-3 m-2 d-none d-sm-block bg-light shadow-sm">
                    <h6>Instituições</h6>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-4 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Promotores de eventos</h6>
                </div>
            </div>
            <hr/>
            <ListOfEvents/>
        </div>
    );
    
}

export default withRouter(InitialPage);