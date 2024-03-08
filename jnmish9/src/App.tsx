import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

function Header() {
  return <h1>March Madness Teams</h1>;
}

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

const teamNames = data.teams;

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {teamNames.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
