import React from 'react';
import violao from '../../violao.jpg';

const eventos = [{id:1,titulo:'Evento 1'},{id:2,titulo:'Evento 2'},{id:3,titulo:'Evento 3'},{id:4,titulo:'Evento 4'},{id:5,titulo:'Evento 5'},{id:6,titulo:'Evento 6'}];

export default function ListOfEvents () {
    return(
        <div class="row justify-content-center">

                {
                    eventos.map((item,id) => {
                        return(
                            <div key={id} class="card col-lg-3 col-md-5 col-sm-10 m-3 bg-light shadow">
                                <img class="card-img-top" style={{width:'100%',height:'300px'}} src={violao} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">{item.titulo}</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>  
                        )
                    })
                }
                
        </div>
    );
}

