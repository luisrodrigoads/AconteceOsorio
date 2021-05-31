import React, { useState,useRef } from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { disableUser, enableUser, updateUser, updateUserImg } from '../actions/userActions';
import BASE_URL from '../config/consts';
import ListOfEvents from './componentsPage/ListOfEvents';
import UserInfoModal from './componentsPage/UserInfoModal';

import styles from '../styles/UserInitialPageStyle';

function UserInitialPage () {

    const user = useSelector(state => state.user.personalInfo);

    const [visibleDescription, setVisibleDescription] = useState(false);
    const maxLenghtDescription = 100;

    const dispatch = useDispatch();

    const inputFile = useRef(null) 
    const closeModal = useRef(null);

    const ShowSocialMedia = (props) => {

        if(props.socialMedia){
            return(
                <a href={props.socialMedia} target="_blank" rel="noreferrer">
                    <img style={styles.socialMediaIcon} src={props.socialMediaIcon} alt={props.socialMediaName} title={props.socialMediaName}/>
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
                      
                    <input type="file" id="file" ref={inputFile} style={styles.inputChangePersonalPhoto} onChange={e => updatePerfilPhoto(e)}/>
                    
                    <button type="button" data-toggle="modal" data-target="#exampleModal" style={styles.buttonChangePersonalPhoto}>
                        <img 
                            src={`${BASE_URL}/${user.profilePhoto}`}
                            style={styles.imgChangePersonalPhoto} 
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

                    <h5 style={styles.textChangeVisibilityUser} data-toggle="modal" data-target="#visibilityUserModal">{user.accountActivation ? 'Deixar conta invisivel' : 'Deixar conta visivel'}</h5>
                    <Link to="/EditUserPage">
                        <h5 style={styles.textLinkStyle}>Editar informações</h5>
                    </Link>
                    <hr/>
                    <h2>{user.fantasyName}</h2>
                    {
                        visibleDescription ?
                            <h5>{user.description}</h5>
                        :
                        <>
                            <h5>{user.description.substring(0,maxLenghtDescription) + (user.description.length > maxLenghtDescription ? "..." : " ")}</h5>
                            {
                                user.description.length > maxLenghtDescription ?
                                <h5 style={styles.textLinkStyle} onClick={()=>{setVisibleDescription(true);}} >Ver Mais</h5>
                                :
                                null
                            }
                        </>
                    }
                    
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
                                    <button type="button" style={styles.seeMoreImagesUser} className="btn btn-outline-secondary btn-rounded waves-effect" data-toggle="modal" data-target="#myModal">Ver Imagens</button>

                                    <>
                                    <div className="modal fade" id="myModal" role="dialog">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">

                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>

                                                <div className="modal-body">

                                                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                                                        
                                                        <div className="carousel-inner">
                                                            {
                                                                user.otherPictures.map((item,index)=>{
                                                                    return(
                                                                        <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                                                                            <img 
                                                                                src={`${BASE_URL}/${item}`}
                                                                                style={styles.otherImagesUser}
                                                                                alt="img cultural_place"
                                                                            />
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <a className="carousel-control-prev" href="#carousel-example-generic" role="button" data-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="sr-only">Anterior</span>
                                                    </a>
                                                    <a className="carousel-control-next" href="#carousel-example-generic" role="button" data-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="sr-only">Próximo</span>
												    </a>

                                                    </div>


                                                    

                                                </div>
                                                
                                                <div className="modal-footer">
                                                    <form className="form-inline">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                                    </form>             
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    </>                              
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

