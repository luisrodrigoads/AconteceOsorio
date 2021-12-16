
import styles from '../../../styles/UserInitialPageStyle';
import BASE_URL from '../../../config/consts';

const EventDetail = props => {
    const culturalEvent = props.culturalEvent;

    const dateStartEvent = new Date(culturalEvent.dateStart)

    const dateEndEvent = culturalEvent.dateEnd ? new Date(culturalEvent.dateEnd) : null

    return(
        <div className="row  align-items-center justify-content-center">
            <div className="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light shadow">
                <img className="card-img-top" style={{width:'100%',height:'300px'}} src={`${BASE_URL}/${culturalEvent?.image}`} alt="Alternative description"/>
                <div className="card-body">
                    <h5 className="card-title">{culturalEvent.eventTitle}</h5>
                    <p className="card-text">{culturalEvent.eventDescription}</p>
                    <p className="card-text"><b>Local: </b>{culturalEvent.address}</p>
                    <p className="card-text"><b>Contato: </b>{culturalEvent.contact}</p>
                    <a href={culturalEvent.socialNetworkLink} target="_blank" style={{textDecoration: 'none'}} rel="noreferrer">
                        <p className="card-text"><b>Redes sociais/site</b></p>
                    </a>
                    <p className="card-text"><b>Capacidade púbico: </b>{culturalEvent.publicCapacity}</p>
                    <p className="card-text"><b>Acessibilidade: </b>{culturalEvent.accessibilityDescription}</p>
                    <p className="card-text"><b>Faixa etária: </b>{culturalEvent.ageRating}</p>
                    <p className="card-text"><b>Data inicial: </b>{`${dateStartEvent.getDate()}-${dateStartEvent.getMonth()+1}-${dateStartEvent.getFullYear()}`}</p>
                    {
                        dateEndEvent ?
                        <p className="card-text"><b>Data final: </b>{`${dateEndEvent.getDate()}-${dateEndEvent.getMonth()+1}-${dateEndEvent.getFullYear()}`}</p>
                        : null
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default EventDetail;