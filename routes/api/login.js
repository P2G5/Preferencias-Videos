const express = require('express');
const router = express.Router();
var login_controller = require('./../../controller/loginController');
router.post('/singin',login_controller.check_account)     
module.exports = router;
