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
                    msg: `O bucket '${bucketName}' ja existe. Altere o nome e tente novamente.`,
                    data: err
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    msg: `Bucket '${data.Location}' criado com sucesso.`,
                    data: data.Location
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
                    msg: `O bucket '${bucketName}' não existe.`,
                    data: err
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    msg: `Bucket '${bucketName}' deletado com sucesso.`,
                    data
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
                    msg: `Erro ao listar buckets.`,
                    data: err
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    msg: `Buckets listados com sucesso`,
                    data: data.Buckets
                })
            }
        });
    })
}

listBucketId = ({ bucketName }) => {
    return new Promise((resolve, reject) => {
        if (!bucketName) {
            resolve(errorReturn.bucketName)
            return
        }

        let bucket_params = {
            Bucket: bucketName
        };

        s3.listObjects(bucket_params, (err, data) => {
            if (err) {
                resolve({
                    statusCode: 400,
                    msg: `Erro ao listar os arquivos do bucket '${bucketName}'.`,
                    data: err
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    msg: `Arquivos do bucket '${bucketName}' listados com sucesso`,
                    data: data.Contents
                })
            }
        });
    })
}

module.exports = {
    createBucket,
    deleteBucket,
    listBuckets,
    listBucketId
}