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
                   ...action.payload
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