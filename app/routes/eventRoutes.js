const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Define route to render index page
router.get('/', eventController.index);

module.exports = router;