var AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    region: process.env.S3_REGION
});

var s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
});


module.exports = s3;