const words = [
    "apple",
    "banana",
    "elephant",
    "jungle",
    "hangman",
    "javascript",
    "react",
    "mystery",
    "ocean",
    "unicorn"
  ];
  
export  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  }
  