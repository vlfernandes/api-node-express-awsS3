module.exports = (req) =>  {
    return req.auth
        ? ('Auth inválido.')
        : 'Auth não enviado'
}