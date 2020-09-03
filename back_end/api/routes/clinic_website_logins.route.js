'use strict';

const controller = require('../controllers/clinic_website_logins.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getWebsiteLoginsList);
router.post('/add', controller.createWebsiteLogin);
router.post('/delete', controller.deleteWebsiteLogin);

module.exports = router;
