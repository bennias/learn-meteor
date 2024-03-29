import PropTypes from 'prop-types';
import React from 'react';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle={this.props.subtitle} />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired,
};

export default App;
