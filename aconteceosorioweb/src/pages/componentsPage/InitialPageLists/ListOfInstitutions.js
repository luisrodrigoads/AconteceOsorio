import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import {useEffect } from 'react';
import {getInstitutions} from '../../../actions/institutionActions'
import BASE_URL from '../../../config/consts'
import { Link } from 'react-router-dom';

export default function ListOfInstitutions () {

    const dispatch = useDispatch()
    const list = useSelector(state => state.institutions.institutionList) || undefined
    
    useEffect(() => {
        dispatch(getInstitutions())
    },[])

    return(
        <div className="row justify-content-center">
                
                {
                    list === undefined ? null : (
                    list.map((item,index) => {
                        return(
                            <div key={index} className="card col-lg-3 col-md-5 col-sm-10 m-3 bg-light shadow">
                                <Link to={{pathname: '/DetailsUser', state: item}}>
                                    <img className="card-img-top" style={{width:'100%',height:'300px'}} src={`${BASE_URL}/${item.profilePhoto}`} alt="Alternative description"/>
                                </Link>
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