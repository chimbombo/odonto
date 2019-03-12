const mongoose = require('mongoose');
const schema = mongoose.Schema;

const procedureSchema = schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('procedure', procedureSchema);