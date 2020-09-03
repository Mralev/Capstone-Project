'use strict';

const controller = require('../controllers/clinic_remits.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getClinicRemitsList);
router.post('/add', controller.createClinicRemit);

module.exports = router;
