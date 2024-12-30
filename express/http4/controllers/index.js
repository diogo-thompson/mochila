
function returnIndex(req, res, next) {
    res.render('index', { title: 'Express' });
  }

  function returnOutraIndex(req, res, next) {
    res.render('outraIndex');
  }

  module.exports = {
    returnIndex,
    returnOutraIndex
  }