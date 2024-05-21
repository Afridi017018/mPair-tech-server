const express = require('express');
const { userRegister, userLogin, userInfo } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleWare');
const router = express.Router();



router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/user-info', authMiddleware, userInfo);


module.exports = router;