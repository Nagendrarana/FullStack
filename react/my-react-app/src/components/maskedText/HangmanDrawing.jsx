function HangmanDrawing({ wrongGuesses }) {
    return (
      <svg height="250" width="200" className="mx-auto mb-4">
        {/* Gallows */}
        <line x1="10" y1="240" x2="150" y2="240" stroke="white" strokeWidth="4" />
        <line x1="80" y1="20" x2="80" y2="240" stroke="white" strokeWidth="4" />
        <line x1="80" y1="20" x2="140" y2="20" stroke="white" strokeWidth="4" />
        <line x1="140" y1="20" x2="140" y2="50" stroke="white" strokeWidth="4" />
  
        {/* Head */}
        {wrongGuesses > 0 && <circle cx="140" cy="70" r="20" stroke="white" strokeWidth="3" fill="none" />}
        {/* Body */}
        {wrongGuesses > 1 && <line x1="140" y1="90" x2="140" y2="150" stroke="white" strokeWidth="3" />}
        {/* Left Arm */}
        {wrongGuesses > 2 && <line x1="140" y1="100" x2="120" y2="130" stroke="white" strokeWidth="3" />}
        {/* Right Arm */}
        {wrongGuesses > 3 && <line x1="140" y1="100" x2="160" y2="130" stroke="white" strokeWidth="3" />}
        {/* Left Leg */}
        {wrongGuesses > 4 && <line x1="140" y1="150" x2="120" y2="180" stroke="white" strokeWidth="3" />}
        {/* Right Leg */}
        {wrongGuesses > 5 && <line x1="140" y1="150" x2="160" y2="180" stroke="white" strokeWidth="3" />}
      </svg>
    );
  }
  
  export default HangmanDrawing;
  