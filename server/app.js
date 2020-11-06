const cors = require('cors')
const express =  require('express')

const app = express()

const port = process.env.PORT || 8080

const validateToken = require('./config/validateToken');

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions))
app.options('*',cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const Auth = require('./models/auth/authInstituicao')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//rotas públicas
app.post('/login', (req, res) => Auth.login(req, res))
app.post('/signup', (req, res) => Auth.signup(req, res))
app.post('/validateToken', (req, res) => Auth.validateToken(req, res))

///todos os usuários logados pode acessar por aqui
app.use('*', validateToken)

//Instituicao
app.get('/updateToken', (req, res) => Auth.updateToken(req, res))
app.post('/tradeTokenToInstituicao', (req, res) => Auth.tradeTokenToInstituicao(req, res))

app.post('/updateInstituicao', (req, res) => Auth.updateInstituicao(req, res))

app.listen(port,() => console.log('Server on port: ' + port))