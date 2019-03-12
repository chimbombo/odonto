const mongoose = require('mongoose');
const schema = mongoose.Schema;

const meetingSchema = schema({
    date: Date,
    customer: {type: Schema.ObjectId, ref: 'customer'},
    doctor: {type: Schema.ObjectId, ref: 'doctor'},
    procedure: [{type: Schema.ObjectId, ref: 'procedure'}],
    status:String,
    // duración en minutos
    duration: Number,
    input:[{type:Schema.ObjectId, ref: 'input'}]
});

module.exports = mongoose.model('meeting', meetingSchema);