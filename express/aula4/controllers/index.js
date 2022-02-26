function retornaView(req, res, next) {
    res.render('index', { title: 'Express' });
}


function retornaOutraView(req, res, next) {
    res.render('outraView')
}

module.exports = {
    retornaView,
    retornaOutraView
}