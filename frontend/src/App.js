import React from 'react';
import TeamForm from './components/TeamForm';
import TeamDisplay from './components/TeamDisplay';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Fantasy Game</h1>
      <div className="container">
        <TeamForm />
        <TeamDisplay />
      </div>
    </div>
  );
};

export default App;
