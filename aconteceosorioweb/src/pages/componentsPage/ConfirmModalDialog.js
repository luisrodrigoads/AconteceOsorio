import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';

function ConfirmModalDialog(){


    const confirmLogout = () =>{
    
      return <Redirect to="/Logout"/>;
    }

    return(
        <div className="modal fade" id="confirmLogoutModal" tabIndex="-1" role="dialog" aria-labelledby="confirmLogoutLabel" aria-hidden="true">
            <div className="modal-dialog">
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

                        
                        <button type="button" className="btn btn-secondary" onClick={confirmLogout} data-dismiss="modal" aria-label="Close">Confirmar</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(ConfirmModalDialog);