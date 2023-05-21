import getrandomElementFromArray from "../src/utils/randomElementFromArray"
import phrases from '../src/utils/phrases.json'

const ButtonPhrase = ({ setPhrasesRandom, setPathRandom, arrBg }) => {

    const handlePhraseButton = () => {
        setPhrasesRandom(getrandomElementFromArray(phrases));
        setPathRandom(getrandomElementFromArray(arrBg));
        
    }

    return (
        <button onClick={handlePhraseButton}>Ver otro</button>
    )
}

export default ButtonPhrase