import React from 'react';
import { Link } from 'react-router-dom';


export default function HeaderPage (props) {


    return(
        <header>
            <nav class="navbar navbar-light bg-secondary">
             
              <Link to={props.urlPath}>
                    <h2 class="navbar-brand text-white">
                        {props.textButton}
                    </h2>
               </Link>
                 
            </nav>
        </header>
    )   
}

