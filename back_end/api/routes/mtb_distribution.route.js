'use strict';

const controller = require('../controllers/mtb_distribution.controller');
const express = require('express');
const router = express.Router();

router.post('', controller.getClinicmtbDistributionList);
router.post('/add', controller.createClinicmtbDistribution);

module.exports = router;
