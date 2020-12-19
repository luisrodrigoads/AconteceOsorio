const mongoose =  require('mongoose')

const instituicaoSchema = require('../api/dbSchema/instituicaoSchema')

mongoose.connect(
    "mongodb://localhost/acontece-osorio",
    {
        useNewUrlParser: true, 
        useFindAndModify: false, 
        useCreateIndex: true, 
        useUnifiedTopology: true}
);

const instituicao = mongoose.model('instituicao', instituicaoSchema)

module.exports = { instituicao }