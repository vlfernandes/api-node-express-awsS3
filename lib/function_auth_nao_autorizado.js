module.exports = (req) => {
    return req.auth
        ? {
            statusCode: 400,
            msg: `Auth inválido`
        }
        : {
            statusCode: 400,
            msg: 'Auth não enviado'
        }
}