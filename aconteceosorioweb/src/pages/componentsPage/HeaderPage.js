import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderPage (props) {


    /*const confirmModalDialog = () =>{
        return(
            <div className="modal fade" id="confirmLogoutModal" tabIndex="-1" role="dialog" aria-labelledby="confirmLogoutLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body text-justify">
                            <h6>Deseja realmente sair?</h6>      
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>

                            <Link to="/Logout">  
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label="Close">Confirmar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }*/

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
                            {/*confirmModalDialog()*/}
                            
                        </div> 
                    </div>
                </div>
            </nav>
        </header>
    )   
}

