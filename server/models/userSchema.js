const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    companyName: String,
    fantasyName: String,
    cnpj: String,
    responsiblePerson: String,
    telephone: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    address: String,
    institutionType: String,
    espaces: [],
    culturalEvents: [],
    culturalActivities: [],
    userType: {
        type: String,
        default: 'INSTITUICAO'
    },  
    accountActivation: {
        type: Boolean,
        default: true
    },
    description: String
})

module.exports = userSchema