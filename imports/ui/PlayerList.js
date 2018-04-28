import React from 'react';
import PropTypes from 'prop-types';

import Player from './../ui/Player';

class PlayerList extends React.Component {
  renderPlayers = playersList => playersList.map(player => <Player key={player._id} player={player} />);
  render() {
    return this.renderPlayers(this.props.players);
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};

export default PlayerList;
