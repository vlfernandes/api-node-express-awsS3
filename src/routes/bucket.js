const express = require('express');
const router = express.Router();
const controller = require('../controllers/bucket')

router.get('/create/:bucketName', controller.create);
router.get('/delete/:bucketName', controller.delete);

module.exports = router;