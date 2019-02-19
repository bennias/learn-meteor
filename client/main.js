import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import { calculatePlayerPositions, Players } from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, { sort: { score: -1 } }).fetch();
    const positionedPlayers = calculatePlayerPositions(players);
    const title = 'Testing Meteor';
    const subTitle = 'its a subtitle';
    ReactDOM.render(
      <App title={title} subtitle={subTitle} players={positionedPlayers} />,
      document.getElementById('app')
    );
  });
});
