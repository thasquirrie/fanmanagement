const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/signup', authController.signup);
router.post('/login', authController.login);
router.patch(
 '/update-password',
 authController.protect,
 authController.updatePassword
);

module.exports = router;
