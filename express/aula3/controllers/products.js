function returnText(req, res) {
    res.send('Minha rota de products retornou este texto');
}

function inputText(req, res) {
    res.send('Minha rota de input retornou este texto');
}

module.exports = {
    returnText,
    inputText
}