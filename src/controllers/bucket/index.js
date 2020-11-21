const libFunctions = require('./lib')

exports.create = async (req, res, next) => {
    const response = await libFunctions.createBucket(req.body)
    res.status(response.statusCode).send(response.res);
};

exports.delete = async (req, res, next) => {
    const response = await libFunctions.deleteBucket(req.body)
    res.status(response.statusCode).send(response.res);
};

exports.list = async (req, res, next) => {
    const response = await libFunctions.listBuckets()
    res.status(response.statusCode).send(response.res);
};