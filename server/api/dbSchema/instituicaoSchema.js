const mongoose = require('mongoose')

const instituicaoSchema = new mongoose.Schema({
    razaoSocial: String,
    nomeFantasia: String,
    cnpj: String,
    pessoaResponsavel: String,
    telefone: String,
    email: {
        type: String,
        unique: true
    },
    senha: String,
    endereco: String,
    tipoInstituicao: String,
    espacos: [String],
    eventosCulturais: [String],
    atividadesCulturais: [String],
    tipoUsuario: {
        type: String,
        default: 'INSTITUICAO'
    },  
    ativacaoConta: {
        type: Boolean,
        default: true
    },
    descricao: String
})

module.exports = instituicaoSchema