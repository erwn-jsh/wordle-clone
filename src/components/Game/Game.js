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
  const [failed, setFailed] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleSubmitGuess = (newGuess) => {
    setGuesses([...guesses, newGuess]);
  };

  return (
    <>
      <GuessInput handleSubmitGuess={handleSubmitGuess} failed={failed} />
      <PrevGuesses
        guesses={guesses}
        answer={answer}
        setFailed={setFailed}
        failed={failed}
        setSolved={setSolved}
      />
      {/* {failed && failBanner} */}
      {solved && successBanner}
    </>
  );
}

const successBanner = () => {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>
  );
};

// const failBanner = () => {
//   return (
//     <div class="sad banner">
//       <p>
//         Sorry, the correct answer is <strong>{answer}</strong>.
//       </p>
//     </div>
//   );
// };

export default Game;
