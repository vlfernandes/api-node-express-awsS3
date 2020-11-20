const libFunctions = require('./lib')

exports.create = async (req, res, next) => {
    const response = await libFunctions.createBucket(req.params.bucketName)
    res.status(response.statusCode).send(response.res);
};

exports.delete = async (req, res, next) => {
    const response = await libFunctions.deleteBucket(req.params.bucketName)
    res.status(response.statusCode).send(response.res);
};