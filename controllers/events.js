const Event = require('../models/event');
const moment = require('moment')


module.exports = {
    create: createEvent,
    delete: deleteEvent,
    index: eventIndex, 
}
async function createEvent (req,res){
    console.log(req.body, moment(req.body.start),req.user)
    const event = await new Event({user: req.user._id, start: moment(req.body.start), end: moment(req.body.end), title: req.body.title, query: req.body.query});
    event.save()
    res.status(201).json(event);
}
async function deleteEvent (req,res){
    const event = await Event.findByIdAndRemove(req.params.id)
    res.status(200).json(event)
}
async function eventIndex (req,res) {
    const events = await Event.find({user: req.user._id});
    res.status(200).json(events);
}

