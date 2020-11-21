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
                    res: `Arquivos sendo listados`
                })
            }
        });
    })
}

module.exports = {
    listFiles
}