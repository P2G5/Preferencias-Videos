const express = require('express');
const router = express.Router();
var signup_controller = require('./../../Controller/singupController');
router.post('/createUsers',signup_controller.create_account)
module.exports = router;