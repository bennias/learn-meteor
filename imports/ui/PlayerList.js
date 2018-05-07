import PropTypes from 'prop-types';
import React from 'react';
import FlipMove from 'react-flip-move';
import Player from './../ui/Player';

class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message item__message--light">Add a new Player</p>
        </div>
      );
    }
    return this.props.players.map(player => <Player key={player._id} player={player} />);
  }
  render() {
    return (
      <div className="playerList">
        <FlipMove maintainContainerHeight={true} duration={300} easing="ease-out">
          {this.renderPlayers()}
        </FlipMove>
      </div>);
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
};

export default PlayerList;
