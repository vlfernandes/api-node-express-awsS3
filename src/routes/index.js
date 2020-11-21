const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "API node express awsS3",
        version: "0.0.1"
    });
});

module.exports = router;
