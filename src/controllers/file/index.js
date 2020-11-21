const libFunctions = require('./lib')

exports.insert = async (req, res, next) => {
    const response = await libFunctions.insertFile(req.body)
    res.status(response.statusCode).send(response.res);
};

exports.list = async (req, res, next) => {
    const response = await libFunctions.listFiles(req.body)
    res.status(response.statusCode).send(response.res);
};