var express = require('express');
var router = express.Router();
const { retornaTexto, inserirUsuario, alterarDados, deletarDados } = require('../controllers/users');

/* GET users listing. */
router.get('/', retornaTexto);

router.get('/outra-rota', retornaTexto);

router.post('/inserir', inserirUsuario);

router.put('/alterar/:id', alterarDados);

router.delete('/deletar/:id', deletarDados);

module.exports = router;
