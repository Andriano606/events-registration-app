const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Define route to render index page
router.get('/', indexController.getIndexPage);

module.exports = router;