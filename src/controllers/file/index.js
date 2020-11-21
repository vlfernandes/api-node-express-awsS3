const libFunctions = require('./lib')

exports.insert = async (req, res, next) => {
    const response = await libFunctions.insertFile(req.params, req.files)
    res.status(response.statusCode).send(response);
};

exports.read = async (req, res, next) => {
    const response = await libFunctions.readFile(req.params)
    res.status(response.statusCode).send(response);
};

exports.delete = async (req, res, next) => {
    const response = await libFunctions.deleteFile(req.params)
    res.status(response.statusCode).send(response);
};