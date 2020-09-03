'use strict';

const controller = require('../controllers/clinics.controller');
const express = require('express');
const router = express.Router();

//  get all clinics
router.get('', controller.getClinicsList);

// get clinic by filter
router.post('/find', controller.getClinicsListByFilter);

// get clinic by id
router.post('/find/id', controller.getClinicsListById);

// create a clinic
router.post('/add', controller.createClinic);

// delete a clinic
router.put('/delete', controller.deleteClinic);

// restore a clinic
router.put('/restore', controller.restoreClinic);

module.exports = router;
