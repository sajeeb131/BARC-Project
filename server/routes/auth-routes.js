const express = require('express')
const authController = require('../controllers/auth-controller')
const app = express.Router()

app.post('/login', authController.login)

app.post('/signup', authController.signup)

module.exports = app