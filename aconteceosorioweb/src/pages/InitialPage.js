import React from 'react';

import {withRouter} from 'react-router-dom';

import styles from '../styles/InitialPageStyle';
import ListOfEvents from './componentsPage/InitialPageLists/ListOfEvents';
import ListOfArtists from './componentsPage/InitialPageLists/ListOfArtists';
import ListOfInstitutions from './componentsPage/InitialPageLists/ListOfInstitutions';
import ListOfCulturalPlaces from './componentsPage/InitialPageLists/ListOfCulturalPlaces';
import ListOfCulturalPromoters from './componentsPage/InitialPageLists/ListOfCulturalPromoters';

import { useState } from 'react';

function InitialPage () {

    const [typeData,setTypeData] = useState('');

    const [hover, setHover] = useState(false);

    const renderList = (typeOfData) => {
        
        if(typeOfData.length < 1 || typeOfData === 'events'){
            return <ListOfEvents />;
        }else if(typeOfData === 'artists'){
            return <ListOfArtists />;
        }else if(typeOfData === 'culturalPlaces'){
            return <ListOfCulturalPlaces />;
        }else if(typeOfData === 'culturalPromoters'){
            return <ListOfCulturalPromoters />;
        }else if(typeOfData === 'institutions'){
            return <ListOfInstitutions />;
        }
    }
    
    return(
        <div className="container-fluid">
                       
            <div className="row justify-content-around" style={styles.typeOfDataDiv}>
                <div onClick={()=> setTypeData('events')} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={hover ? {cursor:'pointer'}:{}} className="col-lg-1 col-md-2 col-sm-2 col-5 d-sm-block m-2 bg-light shadow-sm">
                    <h6>Eventos</h6>
                </div>
                <div onClick={()=> setTypeData('artists')} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={hover ? {cursor:'pointer'}:{}} className="col-lg-1 col-md-2 col-sm-2 col-5 d-sm-block m-2 bg-light shadow-sm">
                    <h6>Artistas</h6>
                </div>
                <div onClick={()=> setTypeData('events')} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={hover ? {cursor:'pointer'}:{}} className="col-lg-2 col-md-4 col-sm-4 col-6 d-sm-block m-2 bg-light shadow-sm">
                    <h6>Prestadores de serviços</h6>
                </div>
                <div onClick={()=> setTypeData('culturalPlaces')} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={hover ? {cursor:'pointer'}:{}} className="col-lg-2 col-md-4 col-sm-4 col-4 d-sm-block m-2 bg-light shadow-sm">
                    <h6>Espaços Culturais</h6>
                </div>
                <div onClick={()=> setTypeData('institutions')} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={hover ? {cursor:'pointer'}:{}} className="col-lg-1 col-md-3 col-sm-3 m-2 col-4 d-sm-block bg-light shadow-sm">
                    <h6>Instituições</h6>
                </div>
                <div onClick={()=> setTypeData('culturalPromoters')} onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={hover ? {cursor:'pointer'}:{}} className="col-lg-2 col-md-4 col-sm-4 col-6 d-sm-block m-2 bg-light shadow-sm">
                    <h6>Promotores de eventos</h6>
                </div>
            </div>
            <hr/>
            {renderList(typeData)}
            
        </div>
    );
    
}

export default withRouter(InitialPage);