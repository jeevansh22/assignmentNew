import React, { useState } from 'react';
import { createTeam } from '../services/api';
import PlayerList from './PlayerList';

const TeamForm = () => {
  const [teamName, setTeamName] = useState('');
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedPlayers.length > 11) {
      setMessage('You can only select up to 11 players.');
      return;
    }

    try {
      const teamData = {
        name: teamName,
        players: selectedPlayers,
      };
      await createTeam(teamData);
      setMessage('Team created successfully!');
    } catch (error) {
      setMessage('Error creating team.');
    }
  };

  return (
    <div>
      <h2>Create a Team</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Team Name:
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </label>
        <PlayerList selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
        <button type="submit">Create Team</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TeamForm;
