import React from 'react';
import HowToUse from './HowToUse';

const NBA = require('nba');

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
        return (
            <div className="player">
                {player.firstName + ' ' + player.lastName}
            </div>
        );
    }
    return (<div>
        No
    </div>);
}

export default Player;