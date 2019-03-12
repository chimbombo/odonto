const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = schema({
    name: String,
    surName: String,
    surName2: String,
    email: String,
    password: String,
    role: String,
    userName: String
});

module.exports = mongoose.model('user',userSchema);