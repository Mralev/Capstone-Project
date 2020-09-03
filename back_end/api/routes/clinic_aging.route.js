'use strict';

const controller = require('../controllers/clinic_aging.controller');
const express = require('express');
const router = express.Router();

//  get all clinic aging
router.post('', controller.getClinicAgingList);

// create clinic aging
router.post('/add', controller.createClinicAging);


module.exports = router;
