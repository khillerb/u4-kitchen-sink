const Event = require('../models/event');
const Calendar = require('../models/calendar');
const moment = require('moment.js')


module.exports = {
    create: createEvent,
    delete: deleteEvent,
    index: eventIndex, 
}
async function createEvent (req,res){
    const event = await new Event({calendar: req.user.calendar, start: moment(req.body.start), end: moment(req.body.end), title: req.body.title, query: req.body.query});
    event.calendar = req.user.calendar;
    event.save()
    res.status(201).json(event);
}
async function deleteEvent (req,res){
    const event = await Event.findByIdAndRemove(req.params.id,(err,res) => {
        if (err) console.log(err)
    
    })
    res.status(200).json(event);
}
function eventIndex (req,res) {
    const events = await Event.find({calendar: req.user.calendar});
    res.status(200).json(events);
}

