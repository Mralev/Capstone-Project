const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var session = require('express-session');

// Get auth from ..env folder
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

// Set up the express app
const app = express();

// This will be our application entry. We'll setup our server here.
const https = require('https');
const http = require('http');

// Log requests to the console.
app.use(logger('dev'));

// session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Models
const models = require('./models');

//Sync DB
models.sequelize.authenticate().then(function () {
    console.log('DB connection SUCCESS!');
    console.log('======================================================================================');
}).catch(function (err) {
    console.log(err, 'DB connection FAILED!');
    console.log('======================================================================================');
});

//Routes into the app
require('./api/routes')(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

console.log('================================== CAPSTONE BACKEND ==================================');
console.log('ENVIRONMENT: ' + env.toUpperCase());
console.log(process.env.ENV_DETAIL);

if (process.env.NODE_ENV === 'production') {
    const server = https.createServer(options, app);
    server.listen(port, () => console.log('Server is listening on port ' + port));
} else {
    // Log requests to the console.
    const server = http.createServer(app);
    server.listen(port, () => console.log('Server is listening on port ' + port));
}


module.exports = app;
