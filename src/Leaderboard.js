let players = [
  {username:'Gina',score:18},
  {username:'Dan',score:15},
  {username:'David',score:5},
  {username:'Nick',score:-40}
]

function App() {
  return (
    <div className="App">
      <ul>
        <li>Leaderboard</li>
        {players.map(player => <li>{player.username} - {player.score}</li>)}
      </ul>
    </div>
  );
}

export default App;
