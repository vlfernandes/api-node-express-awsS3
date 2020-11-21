var { s3 } = require('../../../../config');
var { errorReturn } = require('../../../../lib');

listFiles = ({ bucketName }) => {
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
                    res: `Erro ao listar os arquivos.`
                })
            }
            else {
                resolve({
                    statusCode: 200,
                    res: `Arquivos: ${data.Contents.map(elem => `${elem.Key}`)}`
                })
            }
        });
    })
}

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
                console.log(err)
                resolve({
                    statusCode: 400,
                    res: `Erro ao inserir o arquivo.`
                })
            }
            else {
                console.log(data)
                resolve({
                    statusCode: 200,
                    res: `Arquivo inserido com sucesso`
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
                console.log(err)
                resolve({
                    statusCode: 400,
                    res: `Erro ao ler o arquivo.`
                })
            }
            else {
                console.log(data.Body)
                resolve({
                    statusCode: 200,
                    res: data.Body
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
                console.log(err)
                resolve({
                    statusCode: 400,
                    res: `Erro ao deletar o arquivo.`
                })
            }
            else {
                console.log(data)
                resolve({
                    statusCode: 200,
                    res: `Arquivo deletado com sucesso`
                })
            }
        });
    })
}

module.exports = {
    listFiles,
    insertFile,
    readFile,
    deleteFile
}