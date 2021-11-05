const cors = require('cors');
const express =  require('express');

const userDAO = require('./daos/userDAO');
const culturalEventsDAO = require('./daos/culturalEventsDAO');

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

app.post('/updateUserImg',validateToken ,upload.single('image'), (req, res) => userDAO.updateImg(req, res));
app.post('/updateUser',validateToken ,upload.array('images',10), (req, res) => userDAO.update(req, res));
app.post('/disableUser', validateToken,(req,res) => userDAO.disableUser(req,res));
app.post('/enableUser', validateToken,(req,res) => userDAO.enableUser(req,res));

app.post('/culturalEvent', validateToken,(req, res) => culturalEventsDAO.setCulturalEvent(req, res));
app.get('/culturalEvent/:id', validateToken,(req, res) => culturalEventsDAO.deleteCulturalEvent(req, res));
app.get('/userEvents', validateToken,(req, res) => culturalEventsDAO.getUserCulturalEvent(req, res));

//public user routes
app.get('/institutions', (req,res) => userDAO.getAllInstitution(req, res));
app.get('/culturalPlaces', (req,res) => userDAO.getAllCulturalPlace(req, res));
app.get('/culturalPromoters', (req,res) => userDAO.getAllCulturalPromoter(req, res));
app.get('/artists', (req,res) => userDAO.getAllArtist(req, res));
app.get('/culturalEvents', (req,res) => culturalEventsDAO.getAllCulturalEvents(req, res));
app.get('/filterEventByDate/:dateEvent',(req, res) => culturalEventsDAO.getCulturalEventByDate(req, res));

//get options to register event
app.get('/instituteOptions', (req,res) => userDAO.getInstitutions(req, res));
app.get('/culturalPlaceOptions', (req,res) => userDAO.getCulturalPlaces(req, res));

app.get('/deleteUser/:id',(req,res)=> userDAO.delete(req, res));



app.listen(port,() => console.log('Server on port: ' + port));