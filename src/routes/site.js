const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);

router.get('/trang-chu', siteController.index);

module.exports = router;
