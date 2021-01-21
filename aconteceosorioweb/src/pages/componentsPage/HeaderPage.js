import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderPage (props) {


    return(
        <header >
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary shadow-sm">
                
                <div class="container-fluid" >
                    <img style={{width:'80px'}} src='images/logoAcontece.png' />

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {props.name != '' && 
                    <h2 class="text-white">{props.name}</h2>
                    }

                    <div class="collapse navbar-collapse" id="navbarToggler">
                        <hr/>
                       
                        
                        <div class="navbar-nav ml-auto">
                            <Link to={props.urlPath}>
                                <h2 class="navbar-brand text-white">
                                    {props.textButton}
                                </h2>
                            </Link>
                        </div> 
                    </div>
                </div>
            </nav>
        </header>
    )   
}

