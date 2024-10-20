import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../services/api';

const PlayerList = ({ selectedPlayers, setSelectedPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };
    getPlayers();
  }, []);

  const togglePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
    } else if (selectedPlayers.length < 11) {
      setSelectedPlayers([...selectedPlayers, playerId]);
    } else {
      alert('You can only select up to 11 players');
    }
  };

  return (
    <div>
      <h2>Available Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player._id}>
            {player.name} (Points: {player.points})
            <button
              onClick={() => togglePlayerSelection(player._id)}
              style={{
                backgroundColor: selectedPlayers.includes(player._id) ? 'green' : 'gray',
              }}
            >
              {selectedPlayers.includes(player._id) ? 'Remove' : 'Add'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
