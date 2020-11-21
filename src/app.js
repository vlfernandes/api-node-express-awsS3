const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth')
const fileUpload = require('express-fileupload');   
const { functionAuthNaoAutorizado } = require('../functions')


//Config
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(basicAuth({
    users: { 'fatec': '2020@cetaf' },
    unauthorizedResponse: functionAuthNaoAutorizado
}))
app.use(fileUpload({
    createParentPath: true
}));

//Rotas
const index = require('./routes/index');
const fileRoute = require('./routes/file');
const bucketRoute = require('./routes/bucket');

//Init rotas
app.use('/', index);
app.use('/file', fileRoute);
app.use('/bucket', bucketRoute);

module.exports = app;