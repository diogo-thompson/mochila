var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Este é o meu response da rota products (produtos)');
});

module.exports = router;
