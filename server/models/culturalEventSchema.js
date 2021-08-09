const mongoose =  require('mongoose')

const culturalEventSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    eventTitle: String,
    eventDescription: String,
    dateOcurrEvent: Date,
    dateCreate: {
        type: Number,
        default: Date.now
    }
});

module.exports = culturalEventSchema