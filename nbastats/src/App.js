import React, { useState } from 'react';
import './App.css';
import Player from './player';

const App = () => {

  const [sval, editSVal] = useState('');
  const [player, changePlayer] = useState('');

  const editSearch = e => {
    editSVal(e.target.value);
  }

  const updatePlayer = e => {
    e.preventDefault();
    changePlayer(sval);
  }

  return (
    <div>
      <div className="TopBar">
        <form className="SearchForm">
          <input id="hi" className="Search" value={sval} onChange={editSearch}></input>
          <button className="SearchButton" onClick={updatePlayer} type="submit">Search</button>
        </form>
      </div>
      <Player name={player} />
    </div>
  );
}

export default App;
