import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function PrevGuesses({ guesses, answer, setFailed, setSolved }) {
  const curNumOfGuesses = guesses.length;

  if (curNumOfGuesses === NUM_OF_GUESSES_ALLOWED) {
    setFailed(true);
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  if (guesses[guesses.length - 1] === answer) {
    setFailed(true);
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guesses.length} guess/es</strong>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="guess-results">
        {guesses.map((guess, index) => {
          return (
            <>
              <Guess
                key={`G_${index}`}
                guess={guess}
                answer={answer}
                setFailed={setFailed}
                setSolved={setSolved}
              />
            </>
          );
        })}
        {/* {failed && failBanner} */}
      </div>
    </div>
  );
}

export default PrevGuesses;
