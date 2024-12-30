var express = require('express');
var router = express.Router();
var { returnIndex, returnOutraIndex } = require('../controllers/index');

/* GET home page. */
router.get('/', returnIndex);

router.get('/outra', returnOutraIndex);


module.exports = router;
