import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { updateUser, updateUserImg } from '../../actions/userActions';
import BASE_URL from '../../config/consts';
import ListOfEvents from './ListOfEvents'

export default function InstitutionInitialPage({user}){

    const dispatch = useDispatch();

    const inputFile = useRef(null) 
    const closeModal = useRef(null);

    const handlePhotoClick = () => {
        inputFile.current.click();
    }


    const updatePerfilPhoto = e => {
        console.log(e.target.files[0]);
        
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('image', file);

        dispatch(updateUserImg(formData));
        
        closeModal.current.click();
    }

    const removePerfilPhoto = () => {
        dispatch(updateUser({
            profilePhoto: 'default-avatar.png'
        }))
    }

    return(
        <>
        <div className="row  align-items-center justify-content-center">
            <div className="col-lg-3 col-md-5 col-sm-10 m-3 p-3 text-center">
                
                
                <input type="file" id="file" ref={inputFile} style={{display: "none"}} onChange={e => updatePerfilPhoto(e)}/>
              
                
                <button type="button" data-toggle="modal" data-target="#exampleModal" style={{border: 'none'}}>
                    <img 
                        src={`${BASE_URL}/${user.profilePhoto}`}
                        style={{width:'200px', height:'200px', cursor:'pointer'}} 
                        className="rounded mx-auto d-block" 
                        title="Clique para alterar"
                        alt="Sua foto de perfil"
                    
                    />
                </button>

                <div className="modal modal-dialog fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Alterar foto do perfil</h5>
                            <button type="button" className="close" ref={closeModal} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body container">
                            <button type="button" className="row col-sm mt-3 btn btn-outline-primary" onClick={handlePhotoClick}>Carregar nova foto</button>
                            <button type="button" className="row col-sm mt-3 btn btn-outline-danger"  onClick={removePerfilPhoto} data-dismiss="modal">Remover minha foto</button>
                            <button type="button" className="row col-sm mt-3 btn btn-outline-secondary" data-dismiss="modal">Cancelar</button>
                        </div>
                       
                        </div>
                    </div>
                </div>

                <h2>{user.fantasyName}</h2>
                <h5>{user.description}</h5>
                <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect" data-toggle="modal" data-target="#infoUserModal">   
                        Mais informações
                </button>

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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div>

           <ul className="nav nav-tabs nav-fill mb-4" id="tabUserData" role="tablist">
                <li className="nav-item" >
                    <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabCulturalEvents"
                    role="tab"
                    ><h6 style={{color: 'grey',fontWeight:'bold'}}>Eventos Culturais</h6></a>
                </li>

                <li className="nav-item" >
                    <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabCulturalActivities"
                    role="tab"
                    ><h6 style={{color: 'grey',fontWeight:'bold'}}>Atividades Culturais</h6></a>
                </li>
           </ul>

           <div className="tab-content" id="CulturalEventsContent">
                <div 
                    className="tab-pane fade show active"
                    id="tabCulturalEvents"
                    role="tabpanel"   
                >
                    <ListOfEvents/>
                </div>
                <div 
                    className="tab-pane fade"
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