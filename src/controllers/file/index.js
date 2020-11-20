const libFunctions = require('./lib')

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebi');
};