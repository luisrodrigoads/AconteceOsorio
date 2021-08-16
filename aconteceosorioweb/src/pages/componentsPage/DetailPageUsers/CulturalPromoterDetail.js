const CulturalPromoterDetail = props => {

    const user = props.user

    return(
        <>
        <p>CulturalPromoter detail</p>
        <p>{user.fantasyName}</p>
        </>
    );
}

export default CulturalPromoterDetail;