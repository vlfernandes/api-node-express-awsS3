const libFunctions = require('./lib')

exports.create = async (req, res, next) => {
    const response = await libFunctions.createBucket(req.params)
    res.status(response.statusCode).send(response);
};

exports.delete = async (req, res, next) => {
    const response = await libFunctions.deleteBucket(req.params)
    res.status(response.statusCode).send(response);
};

exports.list = async (req, res, next) => {
    const response = await libFunctions.listBuckets()
    res.status(response.statusCode).send(response);
};

exports.listId = async (req, res, next) => {
    const response = await libFunctions.listBucketId(req.params)
    res.status(response.statusCode).send(response);
};