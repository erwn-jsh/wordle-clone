import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function PrevGuesses({ guesses, answer }) {
  const curNumOfGuesses = guesses.length;

  if (curNumOfGuesses === 6) {
    guesses.shift();
  }

  return (
    <div>
      <div className="guess-results">
        {guesses.map((guess, index) => {
          return (
            <>
              <Guess key={`G_${index}`} guess={guess} answer={answer} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PrevGuesses;
