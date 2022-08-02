const routerEcriptacion = require('express').Router()
const { controllers } = require('../controllers')


//routerUser.get('/',verifyToken, controllers.ApiUserController.getMarca)
routerEcriptacion.post('/encriptar', controllers.ApiEncriptacion.encriptar)
routerEcriptacion.post('/desencriptar', controllers.ApiEncriptacion.desencriptar)



module.exports =  routerEcriptacion