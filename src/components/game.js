'use strict';

import React from 'react';
import Message from './message';
import GuessBox from './guess-box'
import GuessNumber from './guess-number';
import AlreadyGuessed from './already-guessed';

export default function Game(props) {
  
  return (
    <div id="box" className="game">
      <div className="messageBox"><Message /></div>
      <div className="guess-box"><GuessBox /></div>
      <div className="guess-number"><GuessNumber /></div>
      <ul id="guessList" class="guessBox clearfix"><AlreadyGuessed /></ul>
    </div>
  )

};