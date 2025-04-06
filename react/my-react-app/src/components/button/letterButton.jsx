function LetterButton({ updateUsedLetters, disabled, usedLetters }) {
    return (
      <div className="flex flex-wrap justify-center gap-2">
        {Array.from({ length: 26 }, (_, i) => {
          const letter = String.fromCharCode(65 + i);
          const isUsed = usedLetters.includes(letter);
          return (
            <button
              key={letter}
              disabled={disabled || isUsed}
              onClick={updateUsedLetters}
              className={`px-3 py-2 text-white rounded border ${
                isUsed ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>
    );
  }
  
  export default LetterButton;
  