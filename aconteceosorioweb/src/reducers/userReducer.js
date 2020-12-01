const INITIAL_STATE = {
    personalInfo: {
        _id: '',
        razaoSocial: '',
        nomeFantasia: '',
        cnpj: '',
        pessoaResponsavel: '',
        telefone: '',
        email: '',
        senha: '',
        endereco: '',
        tipoInstituicao: '',
        espacos: [],
        eventosCulturais: [],
        atividadesCulturais: [],
        tipoUsuario: '',  
        ativacaoConta: true,
        descricao: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'USER_FETCHED':
            console.log("User: ",action.payload.type)
            return {
                ...state,
                personalInfo:{
                    _id: action.payload._id,
                    razaoSocial: action.payload.razaoSocial,
                    nomeFantasia: action.payload.nomeFantasia,
                    cnpj: action.payload.cnpj,
                    pessoaResponsavel: action.payload.pessoaResponsavel,
                    telefone: action.payload.telefone,
                    email: action.payload.email,
                    senha: action.payload.senha,
                    endereco: action.payload.endereco,
                    tipoInstituicao: action.payload.tipoInstituicao,
                    espacos: action.payload.espacos,
                    eventosCulturais: action.payload.eventosCulturais,
                    atividadesCulturais: action.payload.atividadesCulturais,
                    tipoUsuario: action.payload.tipoUsuario,  
                    ativacaoConta: action.payload.ativacaoConta,
                    descricao: action.payload.descricao
                }
            }
        
        default:
            return state
    }
}