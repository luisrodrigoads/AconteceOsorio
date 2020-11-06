const jwt = require('jsonwebtoken')
const env = require('../config/secret.env')

const validateToken = (req, res, next) => {

    //CORS é ativado
    // Enviado para asber quais as origens permitidas em requisições feitas pelo serviço disponibilizado
    if(req.method === 'OPTIONS')
        next()

    else{
        const token = req.body.token || req.query.token || req.headers['authorization']

        if(!token)
            return res.status(403).json('No token provided.')

            jwt.verify(token, env.authSecret,(error, decoded) => { // Se o token é válido o fluxo continua
                if(error)
                    return res.status(403).json('Failed to authenticate token.')

                else{
                    req.decoded = decoded; 

                    next();
                }
            })
    }
}

module.exports = validateToken