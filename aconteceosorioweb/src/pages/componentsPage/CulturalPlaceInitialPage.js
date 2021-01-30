import React from 'react'
import ListOfEvents from './ListOfEvents'

export default function CulturalPlaceInitialPage({User: user}){

    return(
        <>
        <div class="row  align-items-center justify-content-center">
            <div class="col-lg-3 col-md-5 col-sm-10 m-3 p-3 text-center">
                <img src='images/violao.jpg' style={{width:'200px',height:'200px'}} class="rounded mx-auto d-block" alt="..."/>
                <h2>{user.fantasyName}</h2>
                <h5>{user.description}</h5>

                <button type="button" class="btn btn-outline-secondary btn-rounded waves-effect" data-toggle="modal" data-target="#infoUserModal">   
                        Mais informações
                </button>

                <div class="modal fade" id="infoUserModal" tabindex="-1" role="dialog" aria-labelledby="infoUserModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="infoUserModalLabel">Informações do Usuário</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-justify">
                            <h6><b>Razão social: </b>{user.companyName}</h6>
                            <hr/>
                            <h6><b>Nome Fantasia: </b>{user.fantasyName}</h6>
                            <hr/>
                            <h6><b>Email: </b>{user.email}</h6>
                            <hr/>
                            <h6><b>Telefone: </b>{user.phone}</h6>
                            <hr/>
                            <h6><b>Endereço: </b>{user.address}</h6>
                            <hr/>
                            <h6><b>CNPJ: </b>{user.cnpj}</h6>
                            <hr/>
                            <h6><b>Pessoa responsável: </b>{user.responsiblePerson}</h6>
                            <hr/>
                            <h6><b>Descrição: </b>{user.description}</h6>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

        <div>

           <ul class="nav nav-tabs nav-fill mb-4" id="tabUserData" role="tablist">
                <li class="nav-item" >
                    <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#tabCulturalEvents"
                    role="tab"
                    ><h6 style={{color: 'grey',fontWeight:'bold'}}>Eventos Culturais</h6></a>
                </li>

                <li class="nav-item" >
                    <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#tabCulturalActivities"
                    role="tab"
                    ><h6 style={{color: 'grey',fontWeight:'bold'}}>Atividades Culturais</h6></a>
                </li>
           </ul>

           <div class="tab-content" id="CulturalEventsContent">
                <div 
                    class="tab-pane fade show active"
                    id="tabCulturalEvents"
                    role="tabpanel"   
                >
                    <ListOfEvents/>
                </div>
                <div 
                    class="tab-pane fade"
                    id="tabCulturalActivities"
                    role="tabpanel"
                >
                    <ListOfEvents/>
                </div>
           </div> 

        </div>
        </>
    );
}