var { s3 } = require('../../../../config');
var { errorReturn } = require('../../../../lib');

insertFile = ({ bucketName, keyFile }, files) => {
    return new Promise((resolve, reject) => {
        if (!bucketName) {
            resolve(errorReturn.bucketName)
            return
        }
        if (!keyFile) {
            resolve(errorReturn.keyFile)
            return
        }
        if (!files?.file) {
            resolve(errorReturn.files)
            return
        }

        const file = files.file

        let bucket_params = {
            Bucket: bucketName,
            Key: keyFile,
            Body: file.data
        };

        s3.putObject(bucket_params, (err, data) => {
            if (err) {
                resolve({
                    statusCode: 400,
                    msg: `Erro ao inserir o arquivo.`,
                    data: err
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    msg: `Arquivo inserido com sucesso`,
                    data
                })
            }
        });
    })
}

readFile = ({ bucketName, keyFile }) => {
    return new Promise((resolve, reject) => {
        if (!bucketName) {
            resolve(errorReturn.bucketName)
            return
        }
        if (!keyFile) {
            resolve(errorReturn.keyFile)
            return
        }

        let bucket_params = {
            Bucket: bucketName,
            Key: keyFile
        };

        s3.getObject(bucket_params, (err, data) => {
            if (err) {
                resolve({
                    statusCode: 400,
                    msg: `Erro ao ler o arquivo.`,
                    data: err
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    msg: 'Arquivo lido com sucesso',
                    data
                })
            }
        });
    })
}

deleteFile = ({ bucketName, keyFile }) => {
    return new Promise((resolve, reject) => {
        if (!bucketName) {
            resolve(errorReturn.bucketName)
            return
        }
        if (!keyFile) {
            resolve(errorReturn.keyFile)
            return
        }

        let bucket_params = {
            Bucket: bucketName,
            Key: keyFile
        };

        s3.deleteObject(bucket_params, (err, data) => {
            if (err) {
                resolve({
                    statusCode: 400,
                    msg: `Erro ao deletar o arquivo.`,
                    data: err
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    msg: `Arquivo deletado com sucesso`,
                    data
                })
            }
        });
    })
}

module.exports = {
    insertFile,
    readFile,
    deleteFile
}