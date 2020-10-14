const mongoose = require('mongoose');
const Schema = mongoose.Schema;



eventSchema = new Schema({
    calendar: {type: Schema.Types.ObjectId, ref: 'Calendar'},
    start: {type:Date},
    end: {type:Date},
    title: {type:String},
    query: {type:String}
})


module.exports = mongoose.model('Event', eventSchema);