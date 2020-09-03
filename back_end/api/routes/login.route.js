'use strict';

const controller = require('../controllers/login.controller');
const express = require('express');
const router = express.Router();

// login  users
router.post('', controller.login);

module.exports = router;
