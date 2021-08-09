const mongoose =  require('mongoose')

const userSchema = require('../models/userSchema')
const culturalEventSchema = require('../models/culturalEventSchema')

console.log("Connecting to DB...")
mongoose.connect(
    'mongodb+srv://acontece-osorio:acontece-osorio-dev@cluster0.gn7yp.mongodb.net/acontece-osorio?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, 
        useFindAndModify: false, 
        useCreateIndex: true, 
        useUnifiedTopology: true}
)
.then(ok => {
    console.log("Connected!");
})
.catch(error => {
    console.log(error);
});

const user = mongoose.model('user', userSchema)
const culturalEvent = mongoose.model('culturalEvent', culturalEventSchema)

module.exports = { user, culturalEvent }