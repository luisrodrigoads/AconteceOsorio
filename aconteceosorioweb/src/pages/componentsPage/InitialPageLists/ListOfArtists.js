import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {useEffect } from 'react';
import {getArtists} from '../../../actions/artistActions'

export default function ListOfArtists () {

    const dispatch = useDispatch()
    const list = useSelector(state => state.artists.artistList) || undefined
    
    useEffect(() => {
        dispatch(getArtists())
    },[])

    return(
        <div className="row justify-content-center">
                
                {
                    list === undefined ? null : (
                    list.map((item,index) => {
                        return(
                            <div key={index} className="card col-lg-3 col-md-5 col-sm-10 m-3 bg-light shadow">
                                <img className="card-img-top" style={{width:'100%',height:'300px'}} src='images/violao.jpg' alt="Alternative description"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.fantasyName}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>  
                        )
                    })
                    )
                }
                
                
        </div>
    );
}