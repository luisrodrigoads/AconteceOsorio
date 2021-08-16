const InstitutionDetail = props => {

    const user = props.user

    return(
        <>
        <p>Institution detail</p>
        <p>{user.fantasyName}</p>
        </>
    );
}

export default InstitutionDetail;