const cors = require('cors');
const express =  require('express');

const userDAO = require('./daos/userDAO');

const validateToken = require('./config/validateToken');

const app = express();
const upload = require('./config/multer')

const port = process.env.PORT || 8080;

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions));
app.options('*',cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('uploads'));

const AuthUser = require('./auth/authUser');

//public routes
app.post('/login', (req, res) => AuthUser.login(req, res));
app.post('/signup', upload.array('images',10),(req, res) => userDAO.signup(req, res));
app.post('/validateToken', (req, res) => AuthUser.validateToken(req, res));

//app.use('*', validateToken);

//User
app.get('/updateToken', validateToken,(req, res) => AuthUser.updateToken(req, res));
app.post('/tradeTokenToUser', validateToken,(req, res) => AuthUser.tradeTokenToUser(req, res));

app.post('/updateUserImg', upload.single('image'), (req, res) => userDAO.updateImg(req, res));
app.post('/updateUser', upload.array('images',10), (req, res) => userDAO.update(req, res));
app.post('/disableUser', (req,res) => userDAO.disableUser(req,res));
app.post('/enableUser', (req,res) => userDAO.enableUser(req,res));

//public user routes
app.get('/institutions', (req,res) => userDAO.getAllInstitution(req, res));
app.get('/culturalPlaces', (req,res) => userDAO.getAllCulturalPlace(req, res));
app.get('/culturalPromoters', (req,res) => userDAO.getAllCulturalPromoter(req, res));
app.get('/artists', (req,res) => userDAO.getAllArtist(req, res));



app.listen(port,() => console.log('Server on port: ' + port));