const mongoose = require('mongoose');
const Event = require('./event')
const Schema = mongoose.Schema

calendarSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    events : [{ type: Schema.Types.ObjectId, ref: 'Event' }]
})

module.exports = mongoose.model('Calendar', calendarSchema);