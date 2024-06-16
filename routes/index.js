const route= require('express').Router()

const controller = require('../controllers/index')

route.get('/', controller.getData);

module.exports = route;