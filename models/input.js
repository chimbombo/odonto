const mongoose = require('mongoose');
const schema = mongoose.Schema;

const inputSchema = schema({
    name: String,
    price: Number,
    count: Number
});

module.exports = mongoose.model('input', inputSchema);