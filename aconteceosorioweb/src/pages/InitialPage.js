import React from 'react';
import ListOfEvents from './componentsPage/ListOfEvents';
import {withRouter} from 'react-router-dom';

import styles from '../styles/InitialPageStyle';
import ListOfUsers from './componentsPage/ListOfUsers';
import { useState } from 'react';
import { useEffect } from 'react';

function InitialPage () {

    const [typeData,setTypeData] = useState('events');

    const renderList = (typeOfData) => {
        
        if(typeOfData !== 'events'){
            return <ListOfUsers typeOfUser={typeOfData} />;
        }else{
            return <ListOfEvents />;
        }
    }
    
    return(
        <div className="container-fluid">
                       
            <div className="row justify-content-around" style={styles.typeOfDataDiv}>
                <div onClick={()=> setTypeData('events')} className="col-lg-1 col-md-2 col-sm-2 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Eventos</h6>
                </div>
                <div onClick={()=> setTypeData('artists')} className="col-lg-1 col-md-2 col-sm-2 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Artistas</h6>
                </div>
                <div onClick={()=> setTypeData('services')} className="col-lg-2 col-md-4 col-sm-4 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Prestadores de serviços</h6>
                </div>
                <div onClick={()=> setTypeData('culturalPlaces')} className="col-lg-2 col-md-4 col-sm-4 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Espaços Culturais</h6>
                </div>
                <div onClick={()=> setTypeData('institutions')} className="col-lg-1 col-md-3 col-sm-3 m-2 d-none d-sm-block bg-light shadow-sm">
                    <h6>Instituições</h6>
                </div>
                <div onClick={()=> setTypeData('culturalPromoters')} className="col-lg-2 col-md-4 col-sm-4 d-none d-sm-block m-2 bg-light shadow-sm">
                    <h6>Promotores de eventos</h6>
                </div>
            </div>
            <hr/>
            {renderList(typeData)}
        </div>
    );
    
}

export default withRouter(InitialPage);