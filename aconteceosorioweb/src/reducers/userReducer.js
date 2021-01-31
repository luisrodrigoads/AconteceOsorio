const INITIAL_STATE = {
    personalInfo: {
        _id: '',
        companyName: '',
        fantasyName: '',
        cnpj: '',
        responsiblePerson: '',
        phone: '',
        email: '',
        password: '',
        address: '',
        institutionType: '',
        places: [],
        culturalEvents: [],
        culturalActivities: [],
        userType: '',  
        accountActivation: true,
        description: ''
    }
}

export default function userStateUpdate(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'USER_FETCHED':
            console.log("User: ", action.payload)
            return {
                ...state,
                personalInfo:{
                    _id: action.payload._id,
                    companyName: action.payload.companyName,
                    fantasyName: action.payload.fantasyName,
                    cnpj: action.payload.cnpj,
                    responsiblePerson: action.payload.responsiblePerson,
                    phone: action.payload.phone,
                    email: action.payload.email,
                    password: action.payload.password,
                    address: action.payload.address,
                    institutionType: action.payload.institutionType,
                    places: action.payload.places,
                    culturalEvents: action.payload.culturalEvents,
                    culturalActivities: action.payload.culturalActivities,
                    userType: action.payload.userType,  
                    accountActivation: action.payload.accountActivation,
                    description: action.payload.description
                }
            }
        
        case 'USER_LOGOUT': 
            return {
                ...state,
                personalInfo:{
                    _id: '',
                }
            }

        default:
            return state
    }
}