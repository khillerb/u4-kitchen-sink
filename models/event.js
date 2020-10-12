const mongoose = require('mongoose');




eventSchema = new Schema({
    start: {type:Date, default: Date.now},
    end: {type:Date, default: Date.now},
    title: {type:String}
})


module.exports = mongoose.model('Event', eventSchema);