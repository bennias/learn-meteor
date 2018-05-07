import PropTypes from 'prop-types';
import React from 'react';
import { Players } from './../api/players';

class Player extends React.Component {
  render() {
    return (
      <div className="item">
        <p className="item__description" key={this.props.player._id}>
          {this.props.player.name} has {this.props.player.score} point(s).
        </p>
        <button
          className="button button--rounded"
          onClick={() => Players.update(this.props.player._id, { $inc: { score: 1 } })}
        >
          +
        </button>
        <button
          className="button button--rounded"
          onClick={() => Players.update(this.props.player._id, { $inc: { score: -1 } })}
        >
          -
        </button>
        <button className="button button--rounded" onClick={() => Players.remove(this.props.player._id)}>
          x
        </button>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
