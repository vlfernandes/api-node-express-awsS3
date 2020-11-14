var { functionRetornoRota } = require('../../../../functions');
var { s3 } = require('../../../../config');


createMyBucket = (bucketName) => {
    let bucket_params = {
        Bucket: bucketName
    };
    s3.createBucket(bucket_params, functionRetornoRota);
}

deleteMyBucket = (bucketName) => {
    let bucket_params = {
        Bucket: bucketName
    };
    s3.deleteBucket(bucket_params, functionRetornoRota);
}

module.exports = {
    createMyBucket,
    deleteMyBucket
}