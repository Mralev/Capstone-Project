'use strict';

const controller = require('../controllers/clinic_month_end.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getClinicMonthEndList);
router.post('/add', controller.createClinicMonthEnd);

module.exports = router;
