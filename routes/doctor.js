const express = require('express')
const doctorController = require('../controllers/doctor')
const md_auth = require('../middlewares/authenticated')

const api = express.Router()

api.post('/saveDoctor', doctorController.saveDoctor)

module.exports = api