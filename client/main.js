import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => {

    return playersList.map((player) => {
        return (
            <p key={player._id}>
                {player.name} has {player.score} point(s).
                <button onClick={() => Players.update(player._id, {$inc:{score: 1}})}>
                    +
                </button>
                <button onClick={() => Players.update(player._id, {$inc:{score: -1}})}>
                    -
                </button>
                <button onClick={() => Players.remove(player._id)}>
                    Remove
                </button>
            </p>
        );
    });
};

const addPlayer = (e) => {
    let playerName = e.target.playerName.value;
    let playerScore = e.target.playerScore.valueAsNumber;
    e.preventDefault();

    if (playerName, playerScore){
        e.target.playerName.value = '';
        e.target.playerScore.valueAsNumber = 0;
        Players.insert({
            name: playerName,
            score: playerScore
        });
    };
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
                <hr/>
                {renderPlayers(players)}

                <form onSubmit={addPlayer}>
                    <input type="text" name="playerName" placeholder="Player Name"/>
                    <input type="number" name="playerScore" placeholder="Player Score"/>
                    <button>Add new Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));
    });
});
