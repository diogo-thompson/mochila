var express = require('express');
var router = express.Router();

const produtos = []

router.get('/', function(req, res, next) {
  res.send(produtos);
});

router.post('/cadastro', function(req, res, next) {
  const {id, titulo, descricao, valor, estoque, vendedor_ID } = req.body;

  produtos.push({
    id, titulo, descricao, valor, estoque, vendedor_ID
  });
});

router.put('/edicao', function(req, res, next) {
  res.send({status: 'Sucesso'});
});

router.delete('/login', function(req, res, next) {
  res.send({status: 'Sucesso'});
});
module.exports = router;
