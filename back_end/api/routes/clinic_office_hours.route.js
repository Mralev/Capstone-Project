'use strict';

const controller = require('../controllers/clinic_office_hours.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getClinicOfficeHoursList);
router.post('/add', controller.createClinicOfficeHours);

module.exports = router;
