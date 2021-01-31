import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderPage (props) {


    return(
        <header >
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary shadow-sm">
                
                <div class="container-fluid" >
                    <Link to='/'>
                        <img style={{width:'80px'}} src='images/logoAcontece.png' alt='Acontece Osório - Logotipo' />
                        <h2 class="navbar-brand text-white ml-5">
                            INÍCIO
                        </h2>
                    </Link>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        
                    </button>

                   <div class="collapse navbar-collapse" id="navbarToggler">
                        
                        <div class="navbar-nav ml-auto">

                            <Link to='InitialUserPage'>
                                <h2 class="navbar-brand text-white">
                                {props.name} - PERFIL
                                </h2>
                            </Link>

                            <Link to={props.urlPath}>
                                <h2 class="navbar-brand text-white ml-4">
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

