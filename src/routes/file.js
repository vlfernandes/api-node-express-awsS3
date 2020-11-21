const express = require('express');
const router = express.Router();
const controller = require('../controllers/file')

router.post('/insert', controller.insert);
router.get('/list', controller.list);
router.get('/read', controller.read);
router.get('/delete', controller.delete);

module.exports = router;