import React from 'react';

function Guess({ guess }) {
  const indvGuess = guess.split('');

  return (
    <div>
      <p className="guess">
        {indvGuess.map((letter, index) => {
          return (
            <>
              <span key={index} className="cell">
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
