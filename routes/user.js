const express = require('express');
const userController = require('../controllers/user');
const md_auth = require('../middlewares/authenticated')

const api = express.Router();

api.get('/', userController.test)
api.post('/register', userController.saveUser)
api.post('/login', userController.loginUser)

module.exports = api