const libFunctions = require('./lib')

exports.createBucket = async (req, res, next) => {
    await libFunctions.createMyBucket(req.params.bucketName)
    res.status(201).send('Finalizado');
};

exports.deleteBucket = async (req, res, next) => {
    await libFunctions.deleteMyBucket(req.params.bucketName)
    res.status(201).send('Finalizado');
};