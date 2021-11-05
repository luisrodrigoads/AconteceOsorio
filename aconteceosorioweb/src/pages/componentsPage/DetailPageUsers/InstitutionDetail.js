import React, { useState, useRef } from 'react';
import ListOfEvents from './../InitialPageLists/ListOfEvents';
import InstitutionPublicModal from '../ModalUsers/InstitutionPublicModal';
import BASE_URL from '../../../config/consts';

import styles from '../../../styles/UserInitialPageStyle';

const InstitutionDetail = props => {

    const user = props.user

    const [visibleDescription, setVisibleDescription] = useState(false);
    const maxLenghtDescription = 100;

    const closeModal = useRef(null);

    const ShowSocialMedia = (props) => {
        if(props.social){
            return(
                <a href={props.socialMedia} target="_blank" rel="noreferrer">
                    <img style={styles.socialMediaIcon} src={props.socialMediaIcon} alt={props.socialMediaName} title={props.socialMediaName}/>
                </a>
            )
        }else{
            return null;
        }
    }

    return(
        <div className="container-fluid">
        <>
        <div className="row  justify-content-center">
            <div className="col-lg-3 col-md-5 col-sm-10 m-3 p-3 text-center">
                
                <img 
                    src={`${BASE_URL}/${user.profilePhoto}`}
                    style={styles.imgChangePersonalPhoto} 
                    className="rounded mx-auto d-block" 
                    alt="Sua foto de perfil"
                    
                />                

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
                                         
                <InstitutionPublicModal User={user} />

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
    </div>
    );
}

export default InstitutionDetail;