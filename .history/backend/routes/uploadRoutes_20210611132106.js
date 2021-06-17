const express = require(express);
const uploadController = require('../controllers/uploadController');

const router = express.Router();

router.post('/', uploadController.uploads, uploadController.uploadImage);

module.exports = router;
