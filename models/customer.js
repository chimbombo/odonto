const mongoose = require('mongoose');
const schema = mongoose.Schema;

const customerSchema = schema({
    name: String,
    surName: String,
    surName2: String,
    rut: String,
    adress: String,
    email: String,
    birthDate: Date,
    allergy: [String],
    phone: Number
});

module.exports = mongoose.model('customer', customerSchema);