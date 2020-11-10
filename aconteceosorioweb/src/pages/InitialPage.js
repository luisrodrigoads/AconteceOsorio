import React from 'react';
import HeaderPage from './componentsPage/HeaderPage';
import violao from '../violao.jpg';

export default function InitialPage() {

    return(
        <div class="container-fluid">
            <HeaderPage urlPath="/LoginPage" textButton="Login"/>
            <div class="card-columns">
                
                <div class="card">
                    <img class="card-img-top " src={violao} alt="Card image cap"/>
                        <div class="card-block">
                            <h4 class="card-title">Card title that wraps to a new line</h4>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                </div>   
            </div>
        </div>
    );
    
}