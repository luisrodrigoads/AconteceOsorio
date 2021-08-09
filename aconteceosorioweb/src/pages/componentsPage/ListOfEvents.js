import React from 'react';

const eventos = [{id:1,titulo:'Evento 1'},{id:2,titulo:'Evento 2'},{id:3,titulo:'Evento 3'},{id:4,titulo:'Evento 4'},{id:5,titulo:'Evento 5'},{id:6,titulo:'Evento 6'}];

export default function ListOfEvents () {
    return(
        <div className="row justify-content-center">

                {
                    eventos.map((item,id) => {
                        return(
                            <div key={id} className="card col-lg-3 col-md-5 col-sm-10 m-3 bg-light shadow">
                                <img className="card-img-top" style={{width:'100%',height:'300px'}} src='images/violao.jpg' alt="Alternative description"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.titulo}</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>  
                        )
                    })
                }
                
        </div>
    );
}
