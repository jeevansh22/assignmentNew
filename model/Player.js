const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },  // Example: 'Batsman', 'Bowler', etc.
  points: { type: Number, required: true } // Points for the player
});

module.exports = mongoose.model('Player', playerSchema);
