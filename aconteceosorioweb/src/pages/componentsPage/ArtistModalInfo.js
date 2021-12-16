import React from 'react';

export default function ArtistModalInfo({User: user}){

    return(
        <>
        {
            user.areasOfExpertise ? (
                <>
                <h6>Areas de atuação</h6>
                {/*user.areasOfExpertise.map((areaItem,indexArea) => {
                    return (
                        <div className="modal-body text-justify" style={{border: '1px solid grey',marginBottom: '10px',borderRadius: '5px'}} key={indexArea}>
                            <h6>{areaItem.area}</h6>
                            <hr/>
                            {areaItem.subAreas.map((subAreaItem,indexSubArea) => {
                                return (
                                    <h6 key={indexSubArea}>{subAreaItem}</h6>
                                );
                            }) 
                            }
                        </div>
                    );
                })
                */}  
                </>
            ): null
        }
        {
            user.targetAudience ? (
                <>
                {
                    <>
                    <h6>Publico Alvo</h6>
                    <div className="modal-body text-justify" style={{border: '1px solid grey',marginBottom: '10px',borderRadius: '5px'}}>
                    {user.targetAudience.map((audience,indexAudience) => {
                        return (
                            <h6 key={indexAudience}>{audience}</h6>
                        );
                    })
                    }
                    </div>
                    </> 
                }
                </>
            ): null
        }
        </>
    );
}