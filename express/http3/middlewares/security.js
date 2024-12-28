
function middlewareSecurity (req, res, next) {
    //console.log('Passou no middleware de segurança');
    if ((1 + 1) === 3) {
        next()
        console.log('Passou no middleware de segurança');
    } else {
        res.send('Você não está autorizado, pois o cálculo de autenticação não está correto.')
    }
}

module.exports = {
    middlewareSecurity
}