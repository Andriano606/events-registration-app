const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.index);
router.get('/view/:id', eventController.show);
router.get('/view/:id/:name', eventController.show);

module.exports = router;