var AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1'
});

var s3 = new AWS.S3({ 
  accessKeyId:"AKIAZQDQA4ECFS4OKFVK",
  secretAccessKey: "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"
});

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebi');
};