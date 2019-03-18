const mongoose = require('mongoose');
const schema = mongoose.Schema;

const doctorSchema = schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    surName: {
        type: String,
        required: [true, 'El apellido paterno es requerido']
    },
    surName2: {
        type: String,
        required: [true, 'El apellido materno es requerido']
    },
    rut: {
        type: Number,
        required: [true, 'El rut es requerido']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es requerido']
    },
    phone: { type: Number, required: [true, 'El numero de telefono es requerido'] },
    incorporationDate: Date,
    modificationDate: Date

});

module.exports = mongoose.model('doctor', doctorSchema);