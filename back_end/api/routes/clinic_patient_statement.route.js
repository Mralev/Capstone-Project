'use strict';

const controller = require('../controllers/clinic_patient_statement.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getClinicPatientStatementList);
router.post('/add', controller.createClinicPatientStatement);

module.exports = router;
