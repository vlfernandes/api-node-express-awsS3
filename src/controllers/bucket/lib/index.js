var { s3 } = require('../../../../config');


createBucket = (bucketName) => {
    return new Promise((resolve, reject) => {
        let bucket_params = {
            Bucket: bucketName
        };
        s3.createBucket(bucket_params, (err, data) => {
            if (err) {
                resolve({
                    statusCode: 400,
                    res: `O bucket '${bucketName}' ja existe. Altere o nome e tente novamente.`
                })
            }
            else {
                resolve({
                    statusCode: 201,
                    res: `Bucket '${data.Location}' criado com sucesso`
                })
            }
        });
    })
}

deleteBucket = (bucketName) => {
    return new Promise((resolve, reject) => {
        let bucket_params = {
            Bucket: bucketName
        };
        s3.deleteBucket(bucket_params, (err, data) => {
            if (err) {
                resolve({
                    statusCode: 400,
                    res: `O bucket '${bucketName}' não existe.`
                })
            }
            else {
                resolve({
                    statusCode: 201,
                    res: `Bucket '${bucketName}' deletado com sucesso`
                })
            }
        });
    })
}

module.exports = {
    createBucket,
    deleteBucket
}