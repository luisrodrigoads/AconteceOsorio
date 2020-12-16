import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderPage (props) {


    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary shadow-sm">
                
                <h2 class="navbar-brand text-white">
                    AconteceOsório
                </h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarToggler">
                    <hr/>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                       
                    </ul>
                    <div class="my-2 my-lg-0 mr-sm-2 my-2 my-sm-0">
                        <Link to={props.urlPath}>
                            <h2 class="navbar-brand text-white">
                                {props.textButton}
                            </h2>
                        </Link>
                    </div> 
                </div>
     
            </nav>
        </header>
    )   
}

