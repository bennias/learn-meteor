import React from 'react';
import { Players } from './../api/players';

class AddPlayer extends React.Component {
  handleSubmit = e => {
    const playerName = e.target.playerName.value;
    const playerScore = e.target.playerScore.valueAsNumber;
    e.preventDefault();

    if ((playerName, playerScore)) {
      e.target.playerName.value = '';
      e.target.playerScore.valueAsNumber = 0;
      Players.insert({
        name: playerName,
        score: playerScore,
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name" />
          <input type="number" name="playerScore" placeholder="Player Score" />
          <button>Add new Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
