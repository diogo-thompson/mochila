var express = require('express');
var router = express.Router();

router.put('/atualizar', function(req, res, next) {
  res.send({status: 'Sucesso'});
});

router.put('/esqueci-senha', function(req, res, next) {
  res.send({status: 'Sucesso'});
});

router.put('/edicao', function(req, res, next) {
  res.send({status: 'Sucesso'});
});

router.post('/login', function(req, res, next) {
  res.send({status: 'Sucesso'});
});

module.exports = router;
