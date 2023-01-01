const express = require('express');
const router = express.Router();
const { generateImage } = require('../openaiController');
router.post('/generateimage', generateImage);
module.exports = router;
