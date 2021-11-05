import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useEffect } from 'react';
import {getEvents} from '../../actions/eventActions';

export default function ListOfUserEvents (props) {

    const dispatch = useDispatch()

    const list = useSelector(state => state.events.culturalEvents) || undefined

    useEffect(()=>{
         dispatch(getEvents());
    },[])

    return(
        <div className="row justify-content-center">
                {
                        
                        list.map((item,id) => {
                            
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
