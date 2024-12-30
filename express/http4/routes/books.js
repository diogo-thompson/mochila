var express = require('express');
var router = express.Router();
var { retornaLivro } = require('../controllers/books');

/* GET books listing. */
router.get('/', retornaLivro);

module.exports = router;
