'use strict';

const controller = require('../controllers/clinic_deposit_entry.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getClinicDepositEntryList);
router.post('/add', controller.createClinicDepositEntry);

module.exports = router;
