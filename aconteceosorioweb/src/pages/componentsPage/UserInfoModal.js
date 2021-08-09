import React from 'react';
import cnpjFormatted from '../../helper/cnpjFormatted';
import cpfFormatted from '../../helper/cpfFormatted';
import phoneFormatted from '../../helper/phoneFormatted';
import ArtistModalInfo from './ArtistModalInfo';
import CulturalPlaceModalInfo from './CulturalPlaceModalInfo';

export default function UserInfoModal ({User: user}){


    const renderComplementaryInfo = () =>{
        if(user.userType === 'CULTURAL_PLACE'){
           return <CulturalPlaceModalInfo User={user}/>;
        }else if(user.userType === 'ARTIST'){
            return <ArtistModalInfo User={user} />;
        }else{
           return null;
        }
    }

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
                        {
                            user.userType === 'PROMOTER' || user.userType === 'ARTIST' ?
                            <>
                            <h6><b>CPF: </b>{cpfFormatted(user.cpf)}</h6>
                            <hr/>
                            </>
                            :
                            <>
                            <h6><b>Razão social: </b>{user.companyName}</h6>
                            <hr/>
                            </>
                        }
                        <h6><b>Email: </b>{user.email}</h6>
                        <hr/>
                        <h6><b>Telefone: </b>{phoneFormatted(user.phone)}</h6>
                        <hr/>
                        <h6><b>Endereço: </b>{user.address}</h6>
                        {
                            user.cnpj ? (
                                <>
                                <hr/>
                                <h6><b>CNPJ: </b>{ cnpjFormatted(user.cnpj)}</h6>
                                </>
                            ) : null
                        }
                        <hr/>
                        {
                            user.userType === 'PROMOTER' || user.userType === 'ARTIST' ? 
                            null
                            :
                            <>
                            <h6><b>Pessoa responsável: </b>{user.responsiblePerson}</h6>
                            <hr/>
                            </>
                        }
                        {
                            user.userType === 'PROMOTER' && user.linkedInstitution?
                            <>
                            <h6><b>Instituição vinculada: </b>{user.linkedInstitution}</h6>
                            <hr/>
                            </>
                            :
                            null
                        }

                        {
                            user.userType === 'INSTITUTION' && user.institutionType ?
                            <>
                            <h6><b>Tipo de instituição: </b>{user.institutionType}</h6>
                            <hr/>
                            </>
                            :
                            null
                        }
                       
                        {renderComplementaryInfo()} 

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