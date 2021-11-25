var express = require('express');
var router = express.Router();

var { returnText, inputText } = require('../controllers/products')
var { middlewaresSecurity } = require('../middlewares/security')

/* GET products page. */
router.get('/', returnText);

router.get('/returnText2', middlewaresSecurity, returnText);

router.post('/inputText', inputText);

module.exports = router;
