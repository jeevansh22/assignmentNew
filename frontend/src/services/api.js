import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Your Node.js backend URL

// Fetch all players
export const fetchPlayers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/players`);
    return response.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};

// Create a new team
export const createTeam = async (teamData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/teams`, teamData);
    return response.data;
  } catch (error) {
    console.error('Error creating team:', error);
    throw error;
  }
};

// Get a team by ID
export const getTeamById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/teams/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching team:', error);
    return null;
  }
};
