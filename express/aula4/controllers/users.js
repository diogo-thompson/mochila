function retornaTexto(req, res, next) {
    res.send('retorna a função retornaTexto');
}

function retornaCadastro(req, res, next) {
    res.render('cadastroDeUsuario');
}

module.exports = {
    retornaTexto,
    retornaCadastro
}