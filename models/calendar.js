const mongoose = require('mongoose');
const Event = require('./event')
const Schema = mongoose.Schema

calendarSchema = new Schema({
    events : [{ type: Schema.Types.ObjectId, ref: 'Event' }]
})