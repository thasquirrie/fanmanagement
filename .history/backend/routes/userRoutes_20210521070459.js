const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/signup', authController.signup);
router.post('/login', authController.login);
router.patch(
 '/update-password',
 authController.protect,
 authController.updatePassword
);
router.get(
 '/me',
 userController.protect,
 userController.getMe,
 userController.getUser
);
rou;

router.route('/').get(userController.getAllUsers);

router
 .route('/:id')
 .get(userController.protect, userController.getUser)
 .patch(userController.updateUser)
 .delete(userController.deleteUser);

module.exports = router;
