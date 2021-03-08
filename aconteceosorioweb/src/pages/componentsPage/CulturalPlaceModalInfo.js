import React from  'react';

export default function CulturalPlaceModalInfo({User:user}){

        const renderValue = props => {
            if(props){
                return 'Sim';
            }else
                return 'Não';
        }

        return(
            <>
                {
                    user.linkedInstitution ?
                    <>
                    <h6><b>Instituição vinculada: </b>{user.linkedInstitution}</h6>
                    <hr/>
                    </>
                    :
                    null
                }   
                <h6><b>Cobrança taxa: </b>{renderValue(user.chargingFee)}</h6>
                <hr/>
                <h6><b>Possui banheiro: </b>{renderValue(user.bathroom)}</h6>
                <hr/>
                <h6><b>Possui trocador de fralda: </b>{renderValue(user.diaperChanger)}</h6>
                <hr/>
                <h6><b>Acessiblidade à cadeirante: </b>{renderValue(user.wheelchairAccessibility)}</h6>
                <hr/>
            </>
        );

}