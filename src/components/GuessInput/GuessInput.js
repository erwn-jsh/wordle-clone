import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess, failed }) {
  const [guess, setGuess] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    handleSubmitGuess(guess);

    setGuess('');
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={submitHandler}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
          minLength={2}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          required
          title="5 letter word"
          disabled={failed}
        />
      </form>
    </div>
  );
}

export default GuessInput;
