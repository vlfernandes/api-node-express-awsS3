var { s3 } = require('../../../../config');

listFiles = ({ bucketName }) => {
    return new Promise((resolve, reject) => {
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
                console.log(data)
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
            resolve({
                statusCode: 400,
                res: `Nome do bucket não foi enviado na requisição.`
            })
            return
        }
        if (!keyFile) {
            resolve({
                statusCode: 400,
                res: `Chave do arquivo anão foi enviado na requisição.`
            })
            return
        }
        if (!files?.file) {
            resolve({
                statusCode: 400,
                res: `Arquivo não foi enviado na requisição.`
            })
            return
        }
        const file = files.file

        let bucket_params = {
            Bucket: bucketName,
            Key: keyFile,
            Body: file.data
        };
        console.log(bucket_params)

        // resolve({
        //     statusCode: 200,
        //     res: `Teste.`
        // })
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
            resolve({
                statusCode: 400,
                res: `Nome do bucket não foi enviado na requisição.`
            })
            return
        }
        if (!keyFile) {
            resolve({
                statusCode: 400,
                res: `Chave do arquivo anão foi enviado na requisição.`
            })
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

module.exports = {
    listFiles,
    insertFile,
    readFile
}