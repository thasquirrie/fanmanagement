const express = require('express');
const uploadController = require('../controllers/uploadController');

const router = express.Router();

router.post('/', uploadController.uploads, uploadController.uploadPhoto);

module.exports = router;
