import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Players } from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, { sort: { score: -1 } }).fetch();
    const title = 'Bennis App';
    ReactDOM.render(<App title={title} players={players} />, document.getElementById('app'));
  });
});
