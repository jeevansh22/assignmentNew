const Team = require('../model/Team');
const Player = require('../model/Player');
const { getAllPlayers } = require('./playerController');

const createTeam = async (req, res) => {
  const { name, players } = req.body;

 
  if (players.length > 11) {
    return res.status(400).json({ message: 'Cannot have more than 11 players in a team' });
  }

  try {
    const playerObjects = await Player.find({ '_id': { $in: players } });
    const totalPoints = playerObjects.reduce((sum, player) => sum + player.points, 0);

    const team = new Team({ name, players, totalPoints });
    await team.save();
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get team by ID
const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('players');
    if (!team) return res.status(404).json({ message: 'Team not found' });
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports={getTeamById,createTeam}