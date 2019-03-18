const express = require('express');
const userController = require('../controllers/user');
const md_auth = require('../middlewares/authenticated')

const api = express.Router();

api.get('/', userController.test)
api.post('/register', userController.saveUser)
api.post('/login', userController.loginUser)
api.put('/update-user/:id', userController.updateUser)

module.exports = api