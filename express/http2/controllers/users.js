
function retornaTexto(req, res) {
    res.send('Texto retornado.');
}

function inserirUsuario(req, res) {
    console.log(req.body.nome)
    res.send('Texto inserido.')
}

function alterarDados(req, res) {
    console.log(req.body.nome)
    res.send('Texto alterado.')
}

function deletarDados(req, res) {
    console.log(req.body.nome)
    res.send('Texto deletado.')
}


module.exports = {
    retornaTexto,
    inserirUsuario,
    alterarDados,
    deletarDados
}
