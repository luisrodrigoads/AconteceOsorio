const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    //COMMON DATA BETWEEN ACTORS
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum : ['INSTITUTION', 'ARTIST', 'CULTURAL_PLACE', 'ADMIN', 'SERVICES', 'PROMOTER'], 
        required: true
    },
    description: String, 

    accountActivation: {
        type: Boolean,
        default: true  
    },

    profilePhoto: {
        type: String,
        default: "default-avatar.png"
    },

    facebook: String,
    instagram: String,
    spotify: String,
    linkedin: String,

        
    //COMPLEMENTARY DATA - INSTITUTION
    companyName: String,
    fantasyName: String,
    cnpj: String,
    responsiblePerson: String,
    phone: String,
    address: String,
    institutionType: String,
    description: String,
    places: [],
    culturalEvents: [],
    culturalActivities: [],

    //COMPLEMENTARY DATA - CULTURAL PLACE
    otherPictures: [String],
    linkedInstitution: String,
    chargingFee: {
        type: Boolean,
        default: false
    },
    publicCapacity: Number,
    bathroom: {
        type: Boolean,
        default: false
    },
    diaperChanger: {
        type: Boolean,
        default: false
    },
    wheelchairAccessibility: {
        type: Boolean,
        default: false
    },

    //COMPLEMENTARY DATA - PROMOTER
    cpf: String,
      
})

module.exports = userSchema