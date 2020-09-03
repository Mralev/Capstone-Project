'use strict';

const controller = require('../controllers/favorite_clinic.controller');
const express = require('express');
const router = express.Router();

//  get favorite clinic by user
router.post('', controller.getFavoriteClinicByUser);

// add user favorite clinic
router.post('/add', controller.addFavoriteClinic);

// remove user favorite clinic
router.post('/remove', controller.removeFavoriteClinic);

module.exports = router;
