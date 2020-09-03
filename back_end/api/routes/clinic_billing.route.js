'use strict';

const controller = require('../controllers/clinic_billing.controller');
const express = require('express');
const router = express.Router();

//  get clinic billing by id
router.post('', controller.getMatchingClinicBillingList);
router.post('/add', controller.createClinicBilling);


module.exports = router;
