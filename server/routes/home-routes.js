const express = require('express')
const homeController = require('../controllers/home-controller.js')
const {verifyToken} =require('../utils/auth.js')
const app = express.Router()

app.get('/quiz',homeController.getQuizItems)

module.exports = app