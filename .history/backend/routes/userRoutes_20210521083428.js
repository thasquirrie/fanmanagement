const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.patch(
 '/update-password',
 authController.protect,
 authController.updatePassword
);
router.get(
 '/me',
 authController.protect,
 userController.getMe,
 userController.getUser
);
router.patch('/update-me', authController.protect, userController.updateMe);

router.route('/').get(userController.getAllUsers);

router
 .route('/:id')
 .get(
  authController.protect,
  userController.restrictTo('admin'),
  userController.getUser
 )
 .patch(userController.updateUser)
 .delete(userController.deleteUser);

module.exports = router;