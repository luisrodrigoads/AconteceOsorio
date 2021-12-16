import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useEffect } from 'react';
import {getEventsByPublicUser} from '../../../actions/eventsByPublicUser';

export default function ListEventsPublicUser ({idUser,type}) {

    const dispatch = useDispatch()

    const list = useSelector(state => state.eventsByPublicUser.eventUserList) || undefined

    useEffect(()=>{
         dispatch(getEventsByPublicUser(idUser));
    },[])

    return(
        <div className="row justify-content-center">
                {
                        
                        list.filter(ev => ev.eventType === type).map((item,id) => {
                            
                            return(
                                <div key={id} className="card col-lg-3 col-md-5 col-sm-10 m-3 bg-light shadow">
                                    <img className="card-img-top" style={{width:'100%',height:'300px'}} src='images/violao.jpg' alt="Alternative description"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.eventTitle}</h5>
                                        <p className="card-text">{item.eventDescription}</p>
                                    </div>
                                </div>  
                            );
                            
                        })
                        
                }
                
        </div>
    );
}