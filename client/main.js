import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = function (playersList) {

    return playersList.map(function (player) {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>
    })
};

Meteor.startup(function () {

    Tracker.autorun(function () {
        let players = Players.find().fetch();

        let name = 'Benni';
        let title = "Meteor App!";
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}, Nice to see you</p>
                {renderPlayers(players)}
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });

    Players.insert({
        name : 'Falk',
        score: 39
    });

});
