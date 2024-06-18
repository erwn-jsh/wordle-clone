import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import PrevGuesses from '../PrevGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (newGuess) => {
    setGuesses([...guesses, newGuess]);
  };

  return (
    <>
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      <PrevGuesses guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
