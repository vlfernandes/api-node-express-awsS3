var { s3 } = require('../../../../config');
var { errorReturn } = require('../../../../lib');

createBucket = ({ bucketName }) => {
    return new Promise((resolve, reject) => {
        if (!bucketName) {
            resolve(errorReturn.bucketName)
            return
        }

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

deleteBucket = ({ bucketName }) => {
    return new Promise((resolve, reject) => {
        if (!bucketName) {
            resolve(errorReturn.bucketName)
            return
        }

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
                    statusCode: 200,
                    res: `Bucket '${bucketName}' deletado com sucesso`
                })
            }
        });
    })
}

listBuckets = () => {
    return new Promise((resolve, reject) => {
        let bucket_params = {};
        
        s3.listBuckets(bucket_params, (err, data) => {
            if (err) {
                resolve({
                    statusCode: 400,
                    res: `Erro ao listar buckets.`
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    res: `Buckets: ${data.Buckets.map(elem => elem.Name)}`
                })
            }
        });
    })
}

module.exports = {
    createBucket,
    deleteBucket,
    listBuckets
}