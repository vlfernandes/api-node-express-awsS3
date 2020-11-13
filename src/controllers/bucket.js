var AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1'
});

var s3 = new AWS.S3({
  accessKeyId: "AKIAZQDQA4ECFS4OKFVK",
  secretAccessKey: "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"
});

function createMyBucket(bucketName) {
  let bucket_params = {
    Bucket: bucketName
  };

  s3.createBucket(bucket_params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  });
}

function deleteMyBucket(bucketName) {
  let bucket_params = {
    Bucket: bucketName
  };

  s3.deleteBucket(bucket_params, function (err, data) {
    if (err) {
      console.log(err, err.stack);
    }
    else {
      console.log(data);
    }
  });
}


exports.createBucket = async (req, res, next) => {
  console.log(req.params.bucketName)
  const a = await createMyBucket(req.params.bucketName)
  console.log('retorno ===== ', a)
  res.status(201).send('Finalizada');
};

exports.deleteBucket = async (req, res, next) => {
  console.log(req.params.bucketName)
  const a = await deleteMyBucket(req.params.bucketName)
  console.log('retorno ===== ', a)
  res.status(201).send('Finalizada');
};