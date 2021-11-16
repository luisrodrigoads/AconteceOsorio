
import ArtistDetail from './componentsPage/DetailPageUsers/ArtistDetail'
import CulturalPlaceDetail from './componentsPage/DetailPageUsers/CulturalPlaceDetail'
import CulturalPromoterDetail from './componentsPage/DetailPageUsers/CulturalPromoterDetail'
import InstitutionDetail from './componentsPage/DetailPageUsers/InstitutionDetail'
import EventDetail from './componentsPage/DetailPageUsers/EventDetail'

 const DetailsUser = props => {

    const detail = props.location.state
 

    if(detail.userType === 'ARTIST') {
        return <ArtistDetail user={detail} />;
    }else if(detail.userType === 'INSTITUTION'){
        return <InstitutionDetail user={detail} />;
    }else if(detail.userType === 'CULTURAL_PLACE'){
        return <CulturalPlaceDetail user={detail} />;
    }else if(detail.userType === 'PROMOTER'){
        return <CulturalPromoterDetail user={detail} />;
    }else if(detail?.eventType){
        return <EventDetail culturalEvent={detail} />;
    }

    
 }

 export default DetailsUser;