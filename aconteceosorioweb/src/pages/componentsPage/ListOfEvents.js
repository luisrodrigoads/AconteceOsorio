import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useEffect } from 'react';
import { getAllEvents } from '../../actions/allEventActions';


const eventos = [{id:1,titulo:'Evento 1'},{id:2,titulo:'Evento 2'},{id:3,titulo:'Evento 3'},{id:4,titulo:'Evento 4'},{id:5,titulo:'Evento 5'},{id:6,titulo:'Evento 6'}];

export default function ListOfEvents (props) {

    const dispatch = useDispatch()

    const list = useSelector(state => state.allEvents.eventList) || undefined

    useEffect(()=>{
        dispatch(getAllEvents())  
    },[])

    return(
        <div className="row justify-content-center">
                {console.log('list',list)}
                {
                        
                        eventos.map((item,id) => {
                            
                            return(
                                <div key={id} className="card col-lg-3 col-md-5 col-sm-10 m-3 bg-light shadow">
                                    <img className="card-img-top" style={{width:'100%',height:'300px'}} src='images/violao.jpg' alt="Alternative description"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.titulo}</h5>
                                        <p className="card-text">descrição</p>
                                    </div>
                                </div>  
                            )
                            
                        })
                        
                }
                
        </div>
    );
}
