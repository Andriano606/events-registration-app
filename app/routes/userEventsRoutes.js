const express = require('express');
const router = express.Router();
const userEventsController = require('../controllers/userEventsController');

router.get('/register/:id', userEventsController.new);
router.post('/register', userEventsController.create);

module.exports = router;