const libFunctions = require('./lib')

exports.list = async (req, res, next) => {
    const response = await libFunctions.listFiles(req.body)
    res.status(response.statusCode).send(response.res);
};

exports.insert = async (req, res, next) => {
    const response = await libFunctions.insertFile(req.body, req.files)
    res.status(response.statusCode).send(response.res);
};

exports.read = async (req, res, next) => {
    const response = await libFunctions.readFile(req.body)
    res.status(response.statusCode).send(response.res);
};

exports.delete = async (req, res, next) => {
    const response = await libFunctions.deleteFile(req.body)
    res.status(response.statusCode).send(response.res);
};