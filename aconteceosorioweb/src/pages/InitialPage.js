import React from 'react';
import HeaderPage from './componentsPage/HeaderPage';
import ListOfEvents from './componentsPage/ListOfEvents';

export default function InitialPage() {

    return(
        <div class="container-fluid">
            <HeaderPage urlPath="/LoginPage" textButton="Login"/>
            <ListOfEvents/>
        </div>
    );
    
}