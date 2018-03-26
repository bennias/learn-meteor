import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {

    return playersList.map((player) => {
        return <p key={player._id}>{player.name} has {player.score} point(s).</p>
    });

};

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    let playerScore = e.target.playerScore.value;
    e.preventDefault();

    if (playerName, playerScore){
        e.target.playerName.value = '';
        e.target.playerScore.value = 0;
        Players.insert({
            name: playerName,
            score: playerScore
        });
    }
};

Meteor.startup(() => {

    Tracker.autorun(() => {
        let players = Players.find().fetch();

        let name = 'Benni';
        let title = "Meteor App!";
        let jsx = (
            <div>
                <h1>{title}</h1>
                <p>Hello {name}, Nice to see you</p>
                {renderPlayers(players)}

                <form onSubmit={handleSubmit}>
                    <input type="text" name="playerName" placeholder="Player Name"/>
                    <input type="number" name="playerScore" placeholder="Player Score"/>
                    <button>Add new Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});
