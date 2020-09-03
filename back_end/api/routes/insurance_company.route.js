'use strict';

const controller = require('../controllers/insurance_comapy.controller');
const express = require('express');
const router = express.Router();

router.get('', controller.getInsuranceCompanyList);
router.get('/all', controller.getAllInsuranceCompanyList);
router.post('/find', controller.getInsuranceCompanyById);
router.post('/add', controller.createInsuranceCompany);
router.post('/delete', controller.deleteInsuranceCompany);
router.put('/update', controller.updateInsuranceCompany);

module.exports = router;
