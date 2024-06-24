var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Alteração no retorno da rota');
});

router.get('/nova-rota', function(req, res, next) {

  //Controller

  const valor1 = 10;
  const valor2 = 20;
  const resultado = valor1 * valor2

  //Aqui eu poderia chamar meus métodos de model para maipular o banco de dados.

  res.send('Retornou minha primeira rota utilizando MVC ' + resultado);
});

router.get('/outra-rota', function(req, res, next) {

  //Controller

  const valor1 = 100;
  const valor2 = 20;
  const resultado = valor1 * valor2

  //Aqui eu poderia chamar meus métodos de model para maipular o banco de dados.

  res.send('Retornou minha segunda rota utilizando MVC ' + resultado);
});

module.exports = router;
