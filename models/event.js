const mongoose = require('mongoose');
const Schema = mongoose.Schema;



eventSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    start: {type:Date},
    end: {type:Date},
    title: {type:String},
    description: {type:String}
})


module.exports = mongoose.model('Event', eventSchema);