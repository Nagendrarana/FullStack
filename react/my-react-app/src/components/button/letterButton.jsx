
import './letterButton.css';
function LetterButton({updateUsedLetters}) {
    return(  
        <div className="letterButton text-white">
            {Array.from({ length: 26 }, (_, i) => (
                <button key={i} className="letterButton" onClick={updateUsedLetters}>
                    {String.fromCharCode(65 + i)}
                </button>
            ))}
        </div>   
    )
}

export default LetterButton;