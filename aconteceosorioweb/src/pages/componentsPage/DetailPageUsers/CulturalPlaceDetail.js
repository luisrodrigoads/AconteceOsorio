const CulturalPlaceDetail = props => {

    const user = props.user

    return(
        <>
        <p>CulturalPlace detail</p>
        <p>{user.fantasyName}</p>
        </>
    );
}

export default CulturalPlaceDetail;