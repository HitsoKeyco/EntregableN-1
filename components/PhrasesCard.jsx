
const PhrasesCard = ({phrasesRandom}) => {
    
    return (
        <div className="img_contain">
            <div className="phraseRandom">{phrasesRandom.phrase}</div>
            <div className="phraseAutor">{phrasesRandom.author}</div>
            <img className='img_rectangle'src="./img/rectangle1.svg" alt=""  />
            
        </div>
    )
}

export default PhrasesCard