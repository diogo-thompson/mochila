var express = require('express');
var router = express.Router();
var { retornaView, retornaOutraView } = require('../controllers/index')

//Uma rota
router.get('/retorna-view-1', retornaView);

//Uma rota
router.get('/retorna-view-2', retornaOutraView);

module.exports = router;
