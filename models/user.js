const mongoose = require('mongoose');
const schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator')

let validRoles = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

const userSchema = schema({
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
    email: {
        type: String,
        required: [true, 'El email es requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: validRoles
    },
    userName: String,
    status: {
        type: Boolean,
        default: true
    },
    incorporationDate: Date,
    modificationDate: Date
});

userSchema.methods.toJSON = function() {
    let usuario = this
    let userObject = usuario.toObject()
    delete userObject.password

    return userObject
}

userSchema.plugin(uniqueValidator, { message: '{PATH} debe ser único' })

module.exports = mongoose.model('user', userSchema);