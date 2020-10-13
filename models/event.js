const mongoose = require('mongoose');
const Schema = mongoose.Schema;



eventSchema = new Schema({
    start: {type:Date},
    end: {type:Date},
    title: {type:String}
})


module.exports = mongoose.model('Event', eventSchema);