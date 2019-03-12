const mongoose = require('mongoose');
const schema = mongoose.Schema;

const doctorSchema = schema({
    name: String,
    surName: String,
    surName2: String,
    rut: String,
    email: String,
    phone: Number
});

module.exports = mongoose.model('doctor', doctorSchema);