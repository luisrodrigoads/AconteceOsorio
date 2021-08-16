import React from 'react';

export default function InstitutionPublicModal({User: user}){

    return(
        <div className="modal fade" id="infoUserModal" tabIndex="-1" role="dialog" aria-labelledby="infoUserModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                     <h5 className="modal-title" id="infoUserModalLabel">Informações do Usuário</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                <div className="modal-body text-justify">
                    <h6><b>Nome Fantasia: </b>{user.fantasyName}</h6>
                    <hr/>
                    <h6><b>Pessoa responsavel: </b>{user.responsiblePerson}</h6>
                    <hr/>
                    <h6><b>Email: </b>{user.email}</h6>
                    <hr/>
                    <h6><b>Endereço: </b>{user.address}</h6>
                    <hr/>
                    <h6><b>Tipo de instituição: </b>{user.institutionType}</h6>
                    <hr/>
                    <h6><b>Descrição: </b>{user.description}</h6>
                </div>
                 <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
    );
}