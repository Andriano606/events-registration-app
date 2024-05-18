const express = require('express');
const router = express.Router();
const userEventsController = require('../controllers/userEventsController');

// Define route to render index page
router.get('/register/:id', userEventsController.new);
router.post('/register', userEventsController.create);

module.exports = router;