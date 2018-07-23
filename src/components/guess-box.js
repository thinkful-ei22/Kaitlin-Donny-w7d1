'use strict';

import React from 'react';

export default function GuessBox(props) {

  return (
    <form>
      <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter Your Guess" required=""></input>

      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"></input>

    </form>
  )

}
