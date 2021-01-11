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
        default: true   //IT IS NOT VALIDATED?
    },
    
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
    profilePhoto: {
        type: String,
        default: "default-avatar.png"
    },
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
      
})

module.exports = userSchema