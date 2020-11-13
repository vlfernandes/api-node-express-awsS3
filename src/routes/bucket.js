const express = require('express');
const router = express.Router();
const controller = require('../controllers/bucket')

router.get('/createBucket/:bucketName', controller.createBucket);
router.get('/deleteBucket/:bucketName', controller.deleteBucket);

module.exports = router;