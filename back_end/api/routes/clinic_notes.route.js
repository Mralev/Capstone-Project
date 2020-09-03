'use strict';

const controller = require('../controllers/clinic_notes.controller');
const express = require('express');
const router = express.Router();

//  get all notes of a clinic
router.post('', controller.getClinicNotes);

// create a new clinic notes
router.post('/add', controller.createClinicNote);

// delete a clinic note
router.post('/delete', controller.deleteClinicNote);

module.exports = router;
