import React from 'react';
import {Link} from 'react-router-dom';
import ConfirmModalDialog from './ConfirmModalDialog';

export default function HeaderPage (props) {

    return(
        <header >
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary shadow-sm">
                
                <div className="container-fluid" >
                    <Link to='/'>
                        <img style={{width:'80px'}} src='images/logoAcontece.png' alt='Acontece Osório - Logotipo' />
                        <h2 className="navbar-brand text-white ml-5">
                            INÍCIO
                        </h2>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        
                    </button>

                   <div className="collapse navbar-collapse" id="navbarToggler">
                        
                        <div className="navbar-nav ml-auto">

                            {props.name &&
                                <Link to='InitialUserPage'>
                                    <h2 className="navbar-brand text-white">
                                    {props.name} - PERFIL
                                    </h2>
                                </Link>
                            }

                            {
                                <Link to={props.urlPath}>
                                    <h2 className="navbar-brand text-white ml-4" data-toggle="modal" data-target="#confirmLogoutModal">
                                        {props.textButton}
                                    </h2>
                                </Link>
                            }
                        
                            {
                               /* 
                                props.urlPath === '/Logout' ?
                                <h2 className="navbar-brand text-white ml-4" data-toggle="modal" data-target="#confirmLogoutModal">
                                    {props.textButton}
                                </h2> :
                                <Link to={props.urlPath}>
                                    <button type="button" className="btn btn-secondary">
                                        <h2 className="navbar-brand text-white ml-4" >
                                            {props.textButton}
                                        </h2>
                                    </button>
                                </Link>
                                       */           
                            }
                            {/*<ConfirmModalDialog/>*/}
                            
                        </div> 
                    </div>
                </div>
            </nav>
        </header>
    )   
}
