import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';

//header function
function Header() {
  return <h1>March Madness Teams</h1>;
}

//interface setup
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

//initialize data
const teamNames = data.teams;

//Component to format each card and assign properties
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

//display function uses mapping to display all data
function TeamList() {
  return (
    <div className="team-list">
      {teamNames.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </div>
  );
}

//main app function
function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
