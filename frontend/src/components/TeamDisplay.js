import React, { useState } from 'react';
import { getTeamById } from '../services/api';

const TeamDisplay = () => {
  const [teamId, setTeamId] = useState('');
  const [team, setTeam] = useState(null);

  const fetchTeam = async () => {
    const teamData = await getTeamById(teamId);
    setTeam(teamData);
  };

  return (
    <div>
      <h2>View Team</h2>
      <input
        type="text"
        placeholder="Enter Team ID"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
      />
      <button onClick={fetchTeam}>Fetch Team</button>

      {team && (
        <div>
          <h3>Team Name: {team.name}</h3>
          <h4>Total Points: {team.totalPoints}</h4>
          <ul>
            {team.players.map((player) => (
              <li key={player._id}>{player.name} - {player.points} points</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeamDisplay;
