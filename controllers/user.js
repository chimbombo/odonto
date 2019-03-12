const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt')

const test = (req, res) => {
    res.status(200).send({
        message: 'probando accion del controlador del api'
    });
};

// guardar Usuario
const saveUser = (req, res) => {
    const user = new User();
    const params = req.body;

    user.name = params.name;
    user.surName = params.surname;
    user.surName2 = params.surname2;
    user.email = params.email;
    user.role = 'ROLE_USER';
    if(params.password){
        bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;
            if(user.name != null && user.surName != null && user.surName2 != null && user.email != null){
                //Guardar usuario
                user.userName = params.name.charAt(0).toLowerCase() + params.surname.toLowerCase();
                user.save((err, userStored) => {
                    if(err){
                        res.status(500).send({message: 'Error al guardar el usuario'});
                    }else{
                        if(!userStored){
                            res.status(404).send({message: 'No se ha registrado el usuario'});
                        }else{
                            res.status(200).send({user: userStored});
                        }
                    }
                })
            }else{
                res.status(200).send({message: 'Debe completar todos los campos'});
            }
        })
    }else{
        res.status(200).send({message: 'Introduce la contraseña'});
    }
}

//Login
const loginUser = (req, res) => {
    const params = req.body;
    const username = params.username;
    const password = params.password;

    User.findOne({userName: username}, (err, user) => {
        if(err){
            res.status(500).send({message: 'Error en la petición'});
        }else{
            if(!user){
                res.status(404).send({message: 'Usuario no existe'});
            }else{
                //comprobar contraseña
                bcrypt.compare(password, user.password, (err, check) => {
                    if(check){
                        if(params.gethash){
                            res.status(200).send({
                                token: jwt.createToken(user)
                            })
                        }else{
                            res.status(200).send({user});
                        }
                    }else{
                        res.status(404).send({message: 'El usuario no pudo loguearse'});
                    }
                }) 
            }
        }
    } )
}

module.exports = {
    test,
    saveUser,
    loginUser
};