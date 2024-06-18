import React from 'react';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const indvGuess = guess.split('');

  const checkedGuess = checkGuess(guess, answer);
  console.log(checkedGuess);

  return (
    <div>
      <p className="guess">
        {checkedGuess.map(({ letter, status }, index) => {
          return (
            <>
              <span key={index} className={`cell ${status}`}>
                {letter}
              </span>
            </>
          );
        })}
      </p>
    </div>
  );
}

export default Guess;
