
function returnText (req, res) {
    res.send('Minha rota de products retornou este texto.');
}

function inputText (req, res) {
    res.send('Seu texto foi inputado.');
}


module.exports = {
    returnText,
    inputText
}