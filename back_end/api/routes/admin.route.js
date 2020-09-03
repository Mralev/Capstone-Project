'use strict';

const controller = require('../controllers/admin.controller');
const express = require('express');
const router = express.Router();

// login  users
router.post('', controller.isAdmin);

module.exports = router;
