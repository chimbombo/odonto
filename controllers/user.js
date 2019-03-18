const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('../services/jwt')
const _ = require('underscore')
const moment = require('moment')

const test = (req, res) => {
    res.status(200).send({
        message: 'probando accion del controlador del api'
    });
};

// guardar Usuario
const saveUser = (req, res) => {
    const body = req.body;

    const user = new User({
        name: body.name,
        surName: body.surname,
        surName2: body.surname2,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role,
        userName: body.name.charAt(0).toLowerCase() + body.surname.toLowerCase(),
        incorporationDate: moment().format()
    });

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            user: userDB
        })
    })


}

//Login
const loginUser = (req, res) => {
    const params = req.body;
    const username = params.username;
    const password = params.password;

    User.findOne({ userName: username }, (err, user) => {
        if (err) {
            res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!user) {
                res.status(404).send({ message: 'Usuario no existe' });
            } else {
                //comprobar contraseña
                bcrypt.compare(password, user.password, (err, check) => {
                    if (check) {
                        if (params.gethash) {
                            res.status(200).send({
                                token: jwt.createToken(user)
                            })
                        } else {
                            res.status(200).send({ user });
                        }
                    } else {
                        res.status(404).send({ message: 'El usuario no pudo loguearse' });
                    }
                })
            }
        }
    })
}

const updateUser = (req, res) => {
    let id = req.params.id
    let body = _.pick(req.body, ['name', 'surname', 'surname2', 'email', 'role', 'status'])
    body.modificationDate = moment().format()

    User.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            user: userDB
        })
    })
}

module.exports = {
    test,
    saveUser,
    loginUser,
    updateUser
};