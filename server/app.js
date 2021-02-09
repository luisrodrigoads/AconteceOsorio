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

app.use('*', validateToken);

//User
app.get('/updateToken', (req, res) => AuthUser.updateToken(req, res));
app.post('/tradeTokenToUser', (req, res) => AuthUser.tradeTokenToUser(req, res));

app.post('/updateUserImg', upload.single('image'), (req, res) => userDAO.updateImg(req, res));
app.post('/updateUser', upload.array('images',10), (req, res) => userDAO.update(req, res));
app.post('/disableUser', (req,res) => userDAO.disableUser(req,res));
app.post('/enableUser', (req,res) => userDAO.enableUser(req,res));


app.listen(port,() => console.log('Server on port: ' + port));