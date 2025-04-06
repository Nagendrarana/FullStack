import { useState, useEffect } from 'react';
import LetterButton from '../button/letterButton';
import { getAllCharacters } from './maskedTextUtility';
import HangmanDrawing from './HangmanDrawing'

const MAX_WRONG_GUESSES = 6;

function MaskedText({ text }) {
  const [usedLetters, setUsedLetters] = useState([]);
  const [maskedText, setMaskedText] = useState(getAllCharacters(text, []));
  const [hasWon, setHasWon] = useState(false);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setUsedLetters([]);
    setMaskedText(getAllCharacters(text, []));
    setHasWon(false);
    setWrongGuesses(0);
    setGameOver(false);
  }, [text]);

  function updateUsedLetters(event) {
    const letter = event.target.innerText;

    if (!usedLetters.includes(letter) && !hasWon && !gameOver) {
      const updatedLetters = [...usedLetters, letter];
      setUsedLetters(updatedLetters);

      const newMaskedText = getAllCharacters(text, updatedLetters);
      setMaskedText(newMaskedText);

      if (!text.toUpperCase().includes(letter)) {
        const newWrongGuesses = wrongGuesses + 1;
        setWrongGuesses(newWrongGuesses);

        if (newWrongGuesses >= MAX_WRONG_GUESSES) {
          setGameOver(true);
          console.log("💀 Game Over");
        }
      }

      if (!newMaskedText.includes('_')) {
        setHasWon(true);
        console.log('🎉 You won!');
      }

      console.log(`Used letters: ${updatedLetters}`);
    }
  }

  return (
    <div className="text-center">
      <div className="mb-4 text-2xl text-white">
        {maskedText.split('').map((letter, index) => (
          <span key={index} className="inline-block mx-1">
            {letter}
          </span>
        ))}
      </div>

      {hasWon && (
        <h2 className="text-green-400 text-xl font-bold">🎉 You guessed it right!</h2>
      )}

      {gameOver && (
        <h2 className="text-red-400 text-xl font-bold">💀 Game Over! The word was: <span className="underline">{text.toUpperCase()}</span></h2>
      )}

      {!hasWon && !gameOver && (
        <LetterButton updateUsedLetters={updateUsedLetters} />
      )}

      <div className="mt-4 text-white">Wrong Guesses: {wrongGuesses} / {MAX_WRONG_GUESSES}</div>
      <HangmanDrawing wrongGuesses={wrongGuesses} />

    </div>
  );
}

export default MaskedText;
