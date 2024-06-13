import React from 'react';

function PrevGuesses({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {console.log(guesses)}
        {guesses.map((guess, index) => {
          return (
            <p className="guess" key={index}>
              {guess}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default PrevGuesses;
