const mongoose =  require('mongoose')

const { culturalEvent, user } = require('../config/db');
const { decodeJWT } = require('../auth/authUser')

const getUserCulturalEvent = (req, res) => {
    const currentUser = decodeJWT(req.headers['authorization'])

    culturalEvent
        .find({whoCreated: currentUser._id})
        .sort({ dateCreate: -1})
        .exec((err, result) => {
            if(err) return res.status(400).json(err)
            else {
                res.status(200).json(result)
            }
        })
}

const getCulturalEventByDate = (req, res) => {
    const dateEvent = req.params.dateEvent;
    console.log(new Date(req.params.dateEvent).toISOString());
    culturalEvent
        .find({
            $and: [
                {"dateStart":{$gte: new Date(dateEvent).toISOString()}},
                {"dateEnd":{$lte: new Date(dateEvent).toISOString()}}
            ]
        })
        .sort()
        .exec((err, result) => {
            if(err) return res.status(400).json(err)
            else {
                console.log(result)
                res.status(200).json(result)
            }
        })

}

const getAllCulturalEvents = (req, res) => {
    culturalEvent
        .find()
        .sort({ dateCreate: -1 })
        .exec((err, result) => {
            if(err) res.status(400).json(err);
            else {
                res.status(200).json(result);
            }
        })
}

const setCulturalEvent = async (req, res) => {

    const newCulturalEvent = await new culturalEvent(req.body)

    const currentUser = decodeJWT(req.headers['authorization'])

    newCulturalEvent.whoCreated = currentUser._id
    
    newCulturalEvent.save().then(response => 
            user.findOne({_id: currentUser._id }, (err, result) => {
                result.culturalEvents.push(response._id)
                result.save()
                    .then(response => res.status(200).json('successfuly request'))
                    .catch(err => res.status(500).json('Internal server error'))
            })
    )
}

const deleteCulturalEvent = (req, res) => {
    const currentUser = decodeJWT(req.headers['authorization'])

    const culturalEventID = req.params.id;
    culturalEvent
        .deleteOne({whoCreated: currentUser._id, _id: culturalEventID})
        .exec((err, result) => {
            if(err){
                console.log('batata errada')
                return res.status(400).json(err)
            } 
            else {
                console.log('batata certo')
                res.status(200).json({result})
            }
        })
}

module.exports = {getUserCulturalEvent, getAllCulturalEvents, setCulturalEvent, deleteCulturalEvent, getCulturalEventByDate}