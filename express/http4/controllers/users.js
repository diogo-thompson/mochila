
function retornaTexto(req, res, next) {
    res.send('Resposta da rota users ( / ).');
  }

  function retornaCadastro(req, res, next) {
    res.render('cadastroDeUsuario');
  }

  
  module.exports = {
    retornaTexto,
    retornaCadastro
  }