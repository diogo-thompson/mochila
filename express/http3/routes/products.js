var express = require('express');
var router = express.Router();
var { returnText, inputText } = require('../controllers/products');
var { middlewareSecurity } = require('../middlewares/security');

/* GET users listing. */
router.get('/', middlewareSecurity, returnText);

router.post('/input', inputText)

module.exports = router;
