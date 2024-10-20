const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const playerRoutes = require('./routes/playerRoutes');
const teamRoutes = require('./routes/teamRoutes');

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/players', playerRoutes);
app.use('/teams', teamRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
