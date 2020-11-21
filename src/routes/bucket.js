const express = require('express');
const router = express.Router();
const controller = require('../controllers/bucket')

router.get('/create', controller.create);
router.get('/delete', controller.delete);
router.get('/list', controller.list);

module.exports = router;