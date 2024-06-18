import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function PrevGuesses({ guesses }) {
  const curNumOfGuesses = guesses.length;

  if (curNumOfGuesses === 6) {
    console.log('Max guess limit');
    guesses.shift();
  }

  return (
    <div>
      <div className="guess-results">
        {guesses.map((guess, index) => {
          return (
            <>
              <Guess key={`G_${index}`} guess={guess} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PrevGuesses;
