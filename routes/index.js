var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var encriptado="";
  var desencriptado="";
  res.render('index', { title: 'Encriptacion',encriptado:encriptado,desencriptado:desencriptado });
});

router.post('/encriptacion', async function(req, res, next) {
  body={
    texto: req.body.textoAEncriptar,
    clave: req.body.claveAEncriptar
  }
  var encriptado="";
  var desencriptado="";
  await axios.post("https://vernamcifrado.herokuapp.com/api/v1/encriptar",body).then(respuesta=>{
    encriptado=respuesta.data.Resultado
  })
  
  res.render('index', { title: 'Encriptacion',encriptado:encriptado,desencriptado:desencriptado });
});

router.post('/desencriptacion', async function(req, res, next) {
  body={
    texto: req.body.textoADesencriptar,
    clave: req.body.claveADesencriptar
  }
  var encriptado="";
  var desencriptado="";
  await axios.post("https://vernamcifrado.herokuapp.com/api/v1/desencriptar",body).then(respuesta=>{
    desencriptado=respuesta.data.Resultado
  })
  
  res.render('index', { title: 'Encriptacion',encriptado:encriptado,desencriptado:desencriptado });
});


module.exports = router;
