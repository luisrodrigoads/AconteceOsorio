const jwt = require('jsonwebtoken')
const {instituicao} = require('../../config/db')
const env = require('../../config/secret.env')
const mongoose = require('mongoose')
const crypto = require('crypto')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6})/

const login = (req, res) => {
    
    instituicao.findOne({email: req.body.email}, (err, result) => {
        if(err)
            return res.status(500).json('Internal error')

        else if(result && result.senha === req.body.senha){
            return res.status(200).json({result, token: getJWT(result.toJSON()) })
        }

        else
            return res.status(202).json('Usuário/Senha inválidos')
    })
}

const getJWT = data => jwt.sign(data, env.authSecret, {expiresIn: "30 days"})
const decodeJWT = token => jwt.decode(token)

const tradeTokenToInstituicao = (req, res) => {
    let data = jwt.decode(req.headers['authorization']);

    res.status(200).json(data);
}

const signup = (req, res) => {

    let dataNewInstituicao = req.body

    //verifica se o email recebido é realmente um email
    if(!dataNewInstituicao.email.match(emailRegex))
        return res.status(202).json('Email inválido.')

    // compara a senha    
    if(dataNewInstituicao.senha != dataNewInstituicao.confirmaSenha)
        return res.status(202).json('Senhas não conferem.')

    else if(dataNewInstituicao.senha.length < 5)
        return res.status(202).json('A senha deve ter no mínimo 5 digitos')

    //se não for encontrado erros, verifica se o email já existe, se não um novo usuário é criado
    instituicao.findOne({email: dataNewInstituicao.email}, (err, result) => {
        if(err)
            return res.status(500).json('Internal server error')

        else if(result !== null)
            return res.status(202).json('O email já está em uso')

        else {
            delete dataNewInstituicao.confirmaSenha
            new instituicao(dataNewInstituicao).save(err => 
                err ?
                    res.status(202).json('Erro cadastrando instituição: ' + err) :
                    res.status(200).json('Instituição criada com sucesso!')
            )
        }
    })

}

const validateToken = (req, res) =>
    jwt.verify(req.body.token, env.authSecret, (err, decoded) =>
        res.status(200).json({valid: !err}))

const updateInstituicao = (req, res) => {

    const data = req.body;

    if(!req.file){
        let mudaSenha = false;

        if(data['novaSenha'] != null){
            mudaSenha = true
            if(data['novaSenha'] != data['novaSenhaConfirma'])
                return res.status(202).json('Senhas não conferem')

            else if(data['novaSenha'].length < 5)
                return res.status(202).json('A senha deve ter no mínimo 5 digitos')

        }
        if(Object.keys(data).length == 1)
            return res.status(202).json('Você precisa atualizar no mínimo um campo!')
            
        instituicao.findOne({_id: decodeJWT(req.headers['authorization']._id)}, (err, result) => {
            if(err)
                return res.status(500).json('Internal server error!')

            if(data.senha == result.senha){
                if(mudaSenha){
                    data['senha'] = data['novaSenha']
                    delete data ['novaSenha']
                    delete data ['novaSenhaConfirma']
                }

                instituicao.updateOne({_id: decodeJWT(req.headers['authorization']._id)},data)
                    .then(response => {
                        instituicao.findOne({_id: decodeJWT(req.headers['authorization']._id)}, (err, result) =>
                            res.status(200).json({result, token: getJWT(result.toJSON()) })
                        )
                    }).catch(err => res.status(202).json('Internal server error!'))
            } else
                return res.status(202).json('Senha Incorreta!')
        })
    }

}

const updateToken = (req, res) => {
    instituicao.findOne(
        {
            _id: mongoose.Types.ObjectId(decodeJWT(req.headers['authorization'])._id)
        }, (err, result) =>
        err ?
            res.status(202).json("Internal error") :
            res.status(200).json({token: getJWT(result.toJSON()), result})
    )
}

module.exports = {login, signup, validateToken, tradeTokenToInstituicao, updateInstituicao, updateToken, decodeJWT}