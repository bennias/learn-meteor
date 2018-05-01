import React from 'react';
import PropTypes from 'prop-types';

import Player from './../ui/Player';

class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return <p>Add a new Player</p>;
    }
    return this.props.players.map(player => <Player key={player._id} player={player} />);
  }
  render() {
    return <div>{this.renderPlayers()}</div>;
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};

export default PlayerList;
