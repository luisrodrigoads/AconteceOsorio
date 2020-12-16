import React from 'react';
import HeaderPage from './componentsPage/HeaderPage';
import ListOfEvents from './componentsPage/ListOfEvents';

export default function InitialPage () {

    return(
        <div class="container-fluid">
            <HeaderPage urlPath="/LoginPage" textButton="Login"/>
            <div class="row justify-content-center">
                <div class="col-lg-2 col-md-2 col-sm-2 m-2 bg-light shadow-sm">
                    <h6>Categoria 1</h6>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 m-2 bg-light shadow-sm">
                    <h6>Categoria 2</h6>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 m-2 bg-light shadow-sm">
                    <h6>Categoria 3</h6>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 m-2 bg-light shadow-sm">
                    <h6>Categoria 4</h6>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 m-2 bg-light shadow-sm">
                    <h6>Categoria 5</h6>
                </div>
            </div>
            <hr/>
            <ListOfEvents/>
        </div>
    );
    
}