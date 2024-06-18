const route= require('express').Router()

const controller = require('../controllers/user')

route.get('/', controller.getUser);

route.get('/username', controller.getUsername)

module.exports = route;