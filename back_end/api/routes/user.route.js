'use strict';

const controller = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

//  users
router.get('', controller.getUserList);
router.post('/add', controller.createUser);
router.post('/find', controller.getUserByUserName);
router.put('/password/update', controller.updateUserPassword);
router.put('/delete', controller.deleteUser);
router.put('/restore', controller.restoreUser);
router.put('/add/admin-right', controller.makeUserAdmin);
router.put('/remove/admin-right', controller.removeAdminRight);
router.put('/update', controller.updateUser);

module.exports = router;
