const express = require('express');
const router = express.Router();
const controller = require('../controllers/file')

router.post('/', controller.post);

module.exports = router;