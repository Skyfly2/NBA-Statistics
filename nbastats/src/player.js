import React from 'react';
import HowToUse from './HowToUse';

const NBA = require('nba');
const nba = require('nba-api-client');

function Player(props) {
    if (props.name === '') {
        return (
            <div>
                <HowToUse />
            </div>
        );
    }
    const player = NBA.findPlayer(props.name);
    if (player != null) {
        console.log(player);
        const id = nba.getPlayerID(player.firstName + ' ' + player.lastName);
        let playerID = id.PlayerID;
        let teamID = id.TeamID;
        console.log(id);
        console.log(playerID);
        return (
            <div className="player">
                <div className="playerInfo">
                    <img className="playerPic" src={nba.getPlayerHeadshotURL({ PlayerID: playerID, TeamID: teamID })} />
                    {player.firstName + ' ' + player.lastName}
                    <div className="statBlock">
                        {playerID}
                    </div>
                </div>
            </div >
        );
    }
    return (<div>
        No
    </div>);
}

export default Player;