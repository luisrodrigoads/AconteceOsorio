const cors = require('cors');
const express =  require('express');

const instituicaoDAO = require('./daos/instituicaoDAO');

const validateToken = require('./config/validateToken');

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));
app.options('*',cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const AuthInstituicao = require('./auth/authInstituicao');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//rotas públicas
app.post('/login', (req, res) => AuthInstituicao.login(req, res));
app.post('/signup', (req, res) => instituicaoDAO.signup(req, res));
app.post('/validateToken', (req, res) => AuthInstituicao.validateToken(req, res));

///todos os usuários logados pode acessar por aqui
app.use('*', validateToken);

//Instituicao
app.get('/updateToken', (req, res) => AuthInstituicao.updateToken(req, res));
app.post('/tradeTokenToInstituicao', (req, res) => AuthInstituicao.tradeTokenToInstituicao(req, res));

app.post('/updateInstituicao', (req, res) => instituicaoDAO.update(req, res));


app.listen(port,() => console.log('Server on port: ' + port));