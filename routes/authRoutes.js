var express = require('express');
var router = express.Router();


const AuthCtrl = require('../controllers/auth');

router.post('/register', AuthCtrl.CreateUser);
router.post('/login', AuthCtrl.LoginUser);

module.exports = router;