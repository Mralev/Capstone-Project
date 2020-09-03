'use strict';

const controller = require('../controllers/clinic_network.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getClinicNetworkList);
router.post('/add', controller.createClinicNetwork);

module.exports = router;
