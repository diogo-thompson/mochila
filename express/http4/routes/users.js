var express = require('express');
var router = express.Router();
var { retornaTexto, retornaCadastro } = require('../controllers/users');

/* GET users listing. */
router.get('/', retornaTexto);

router.get('/cadastrar', retornaCadastro);

module.exports = router;
