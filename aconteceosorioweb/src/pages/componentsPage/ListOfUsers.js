import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import BASE_URL from '../../config/consts'

//const eventos = [{id:1,titulo:'ator 1'},{id:2,titulo:'ator 2'},{id:3,titulo:'ator 3'},{id:4,titulo:'ator 4'},{id:5,titulo:'Evento 5'},{id:6,titulo:'Evento 6'}];

export default function ListOfUsers (props) {

    const [listOfUsers, setListOfUsers] = useState([]);
    const [typeUser, setTypeUser] = useState(props.typeOfUser);

    useEffect(() => {
        axios.get(`${ BASE_URL }/${typeUser}`)
            .then(response => {
                if(response.status !== 200)
                    console.log('Ocorreu um erro ao buscar ');

                setListOfUsers(response.data);     
            }).catch(error => console.error('Ocorreu um erro ao buscar lista de dados'))
    },[typeUser])

    return(
        <div className="row justify-content-center">
                
                {
                    !listOfUsers ? null : (
                    listOfUsers.map((item,index) => {
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