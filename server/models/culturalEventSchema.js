const mongoose =  require('mongoose')

const culturalEventSchema = new mongoose.Schema({
    whoCreated: mongoose.Schema.Types.ObjectId,
    eventTitle: String,
    relatedInstitution: String,
    eventDescription: String,
    dateOcurrEvent: Date,
    address: String,
    ticketPrice: {
        value: String,
        moreInformation: String
    },
    contact: String,
    socialNetworkLink: String,
    publicCapacity: String,
    accessibilityDescription: String, 
    ageRating: String,
    eventType: {
        type: String,
        enum: ['CULTURAL_ACTIVITY','CULTURAL_EVENT'],
    },
    image: {
        type: String,
        default: "default-avatar.png"
    },

    dateStart: Date,
    dateEnd: Date,
    dateCreate: {
        type: Number,
        default: Date.now
    }
});

module.exports = culturalEventSchema