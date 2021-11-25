function middlewaresSecurity (req, res, next) {
    console.log('Passou no middleware de segurança')
        if ((1 + 2) === 3) {
            next()
        } else {
            res.send('Você não está autorizado, pois o cálculo de autenticação não está correto.')
        }
}

module.exports = {
    middlewaresSecurity
}