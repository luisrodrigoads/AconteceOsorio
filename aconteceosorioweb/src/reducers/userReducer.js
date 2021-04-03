const INITIAL_STATE = {
    personalInfo: {
        _id: '',
        companyName: '',
        fantasyName: '',
        cpf:'',
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
        description: '',
        //Complementary data - cultural place
        otherPictures:[],
        linkedInstitution: '',
        chargingFee: true,
        bathroom: true,
        diaperChanger: true,
        wheelchairAccessibility: true,
        facebook: '',
        instagram: '',
        spotify: '',
        linkedin: '',
        youtube: '',
        otherLink: '',

        //Complementary data - artist
        birthDate: '',
        areasOfExpertise: [],
        portfolioLinks:[],
        targetAudience:[],
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