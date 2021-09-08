const mongoose =  require('mongoose')

const culturalEventSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    eventTitle: String,
    eventDescription: String,
    dateOcurrEvent: Date,
    eventType: {
        type: String,
        enum: ['CULTURAL_ACTIVITY','CULTURAL_EVENT'],
    },
    dateCreate: {
        type: Number,
        default: Date.now
    }
});

module.exports = culturalEventSchema