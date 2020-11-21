const express = require('express');
const router = express.Router();
const controllerBucket = require('../controllers/bucket')
const controllerFile = require('../controllers/file')

router.post('/:bucketName', controllerBucket.create);
router.delete('/:bucketName', controllerBucket.delete);
router.get('/', controllerBucket.list);
router.get('/:bucketName', controllerBucket.listId);

router.get('/:bucketName/file/:keyFile', controllerFile.read);
router.post('/:bucketName/file/:keyFile', controllerFile.insert);
router.delete('/:bucketName/file/:keyFile', controllerFile.delete);

module.exports = router;