const mongoose =  require('mongoose')

const userSchema = require('../models/userSchema')

mongoose.connect(
    "mongodb://localhost/acontece-osorio",
    {
        useNewUrlParser: true, 
        useFindAndModify: false, 
        useCreateIndex: true, 
        useUnifiedTopology: true}
);

const user = mongoose.model('user', userSchema)

module.exports = { user }