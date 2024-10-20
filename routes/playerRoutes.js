const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

// Route to get all players
router.get('/', playerController.getAllPlayers);

module.exports = router;
