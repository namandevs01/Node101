const express = require('express');
const { generateShortUrl } = require('../Controllers/urlController');

const router = express.Router();

router.post('/', generateShortUrl);


module.exports = router;