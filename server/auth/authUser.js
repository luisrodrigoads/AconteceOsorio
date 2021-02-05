const jwt = require('jsonwebtoken')
const {user} = require('../config/db')
const env = require('../config/secret.env')
const mongoose = require('mongoose')

const login = (req, res) => {
    
    user.findOne({email: req.body.email}, (err, result) => {
        if(err)
            return res.status(500).json('Internal error')

        else if(result && result.password === req.body.password){

            return res.status(200).json({result, token: getJWT(result.toJSON()) })
        }

        else
            return res.status(202).json('Usuário/Senha inválidos')
    })
}

const getJWT = data => jwt.sign(data, env.authSecret, {expiresIn: "30 days"})
const decodeJWT = token => jwt.decode(token)

const tradeTokenToUser = (req, res) => {
    let data = jwt.decode(req.headers['authorization']);

    res.status(200).json(data);
}

const validateToken = (req, res) =>
    jwt.verify(req.body.token, env.authSecret, (err, decoded) =>
        res.status(200).json({valid: !err}))


const updateToken = (req, res) => {
    user.findOne(
        {
            _id: mongoose.Types.ObjectId(decodeJWT(req.headers['authorization'])._id)
        }, (err, result) =>
        err ?
            res.status(202).json("Internal error") :
            res.status(200).json({token: getJWT(result.toJSON()), result})
    )
}

module.exports = {login, validateToken, tradeTokenToUser, updateToken, decodeJWT}