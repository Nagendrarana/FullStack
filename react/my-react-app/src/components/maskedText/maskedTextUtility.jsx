export function getAllCharacters(word,usedLetters){

    usedLetters = usedLetters.map((letter) => letter.toUpperCase());
    const guessedWord = new Set(usedLetters);
    const character = word.toUpperCase().split('').map((letter) => {
        if(guessedWord.has(letter)){
            return letter;
        }
        else{
            return '_';
        }
    })
    return character.join(' ');

}
