import React, { useState,useRef } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { disableUser, enableUser, updateUser, updateUserImg } from '../actions/userActions';
import BASE_URL from '../config/consts';
import ListOfEvents from './componentsPage/ListOfEvents';
import UserInfoModal from './componentsPage/UserInfoModal';

function UserInitialPage () {

    const user = useSelector(state => state.user.personalInfo);

    const [visibleImages,setVisibleImages] = useState(false);

    const dispatch = useDispatch();

    const inputFile = useRef(null) 
    const closeModal = useRef(null);

    const ShowSocialMedia = (props) => {

        if(props.socialMedia){
            return(
                <a href={props.socialMedia} target="_blank" rel="noreferrer">
                    <img style={{width:'35px',height:'35px',margin:'10px'}} src={props.socialMediaIcon} alt={props.socialMediaName} title={props.socialMediaName}/>
                </a>
            )
        }else{
            return null;
        }

    }
    
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

    const changeVisibilityUser = () => {
        
        user.accountActivation ? dispatch(disableUser()) 
        :
        dispatch(enableUser())
    }

    return (

        <div className="container-fluid">
            
            <>
            <div className="row  justify-content-center">
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

                    <div className="modal modal-dialog fade" id="visibilityUserModal" tabIndex="-1" aria-labelledby="visibilityUserModal" aria-hidden="true">
                
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="visibilityUserModal">{user.accountActivation ? 'Deixar conta invisivel?' : 'Deixar conta visivel?'}</h5>
                                    <button type="button" className="close" ref={closeModal} data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body container">
                                    <button type="button" className="row col-sm mt-3 btn btn-secondary" data-dismiss="modal" onClick={changeVisibilityUser}>Confirmar</button>
                                    <button type="button" className="row col-sm mt-3 btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>                    

                    <h5 style={{color:'#4682b4',marginTop:'10px'}} data-toggle="modal" data-target="#visibilityUserModal">{user.accountActivation ? 'Deixar conta invisivel' : 'Deixar conta visivel'}</h5>
                    <Link to="/EditUserPage">
                        <h5 style={{color:'#4682b4'}}>Editar informações</h5>
                    </Link>
                    <hr/>
                    <h2>{user.fantasyName}</h2>
                    <h5>{user.description}</h5>
                    <div className="row justify-content-center m-3">
                        <ShowSocialMedia socialMedia={user.facebook} socialMediaIcon={'images/facebook.png'} socialMediaName={'facebook'}/>
                        <ShowSocialMedia socialMedia={user.instagram} socialMediaIcon={'images/instagram.png'} socialMediaName={'instagram'}/>
                        <ShowSocialMedia socialMedia={user.spotify} socialMediaIcon={'images/spotify.png'} socialMediaName={'spotify'}/>
                        <ShowSocialMedia socialMedia={user.linkedin} socialMediaIcon={'images/linkedin.png'} socialMediaName={'linkedin'}/>
                    </div>

                    <button type="button" className="btn btn-outline-secondary btn-rounded waves-effect" data-toggle="modal" data-target="#infoUserModal">   
                            Mais informações
                    </button>

                   
                        {
                            user.userType === 'SERVICES' || user.userType === 'PROMOTER' || user.userType === 'INSTITUTION' ?
                                null
                            :
                            <>
                                {
                                    !visibleImages ?
                                        <h5 style={{margin:'15px'}} onClick={()=>setVisibleImages(true)} >Ver imagens</h5>
                                    :
                                    <>
                                        <h5 style={{margin:'15px'}} onClick={()=>setVisibleImages(false)}>Ocultar</h5>
                                        <div className="row justify-content-center">
                                            {
                                                user.otherPictures.map((item,index)=>{
                                                    return(
                                                        <div key={index} className="col-lg-4 col-md-5 col-sm-10 col-5 m-2">
                                                            <img 
                                                                src={`${BASE_URL}/${item}`}
                                                                style={{width:'140px', height:'140px', cursor:'pointer'}} 
                                                                className="rounded mx-auto d-block"
                                                                alt="img cultural_place"     
                                                            />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </>
                                }
                            </>
                        }
                    


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

