'use strict';

const controller = require('../controllers/clinic_contact.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getClinicContactList);
router.post('/add', controller.createClinicContact);

module.exports = router;
