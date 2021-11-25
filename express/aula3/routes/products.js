var express = require('express');
var router = express.Router();

/* GET product page. */
router.get('/', function(req, res, next) {
  res.send('response products');
});

module.exports = router;
