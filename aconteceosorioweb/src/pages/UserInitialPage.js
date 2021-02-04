import React, { useRef } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import HeaderPage from './componentsPage/HeaderPage';
import {withRouter} from 'react-router-dom';
import { updateUser, updateUserImg } from '../actions/userActions';
import BASE_URL from '../config/consts';
import ListOfEvents from './componentsPage/ListOfEvents';
import UserInfoModal from './componentsPage/UserInfoModal';

function UserInitialPage () {

    const user = useSelector(state => state.user.personalInfo);

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

    return (

        <div className="container-fluid">
            <HeaderPage urlPath="/Logout" textButton="Sair"/>
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

                    <UserInfoModal User={user} />

                </div>
            </div>

            {user.userType !== 'SERVICE_PROVIDER' ? 
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
            : null}
      
            </>

        </div>

    );
}

export default withRouter(UserInitialPage);

