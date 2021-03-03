const UserModel = {
    
        companyName: '',
        fantasyName: '',
        cnpj: '',
        responsiblePerson: '',
        //
        linkedInstitution: '',
        //
        phone: '',
        email: '',
        password: '',
        address: '',
        institutionType: '',
        userType: '', 
        //
        chargingFee: false,
        bathroom: false,
        diaperChanger: false,
        wheelchairAccessibility: false,
        otherPictures:[],
        //
        description: '',
        //promoter
        cpf: '',
        socialMedias:[
                {
                    typeOfMedia:'FACEBOOK',
                    linkOfMedia:''
                },
                {
                    typeOfMedia:'INSTAGRAM',
                    linkOfMedia:''
                },
                {
                    typeOfMedia:'SPOTIFY',
                    linkOfMedia:''
                },
                {
                    typeOfMedia:'LINKEDIN',
                    linkOfMedia:''
                },
        ],
    
}

export default UserModel;