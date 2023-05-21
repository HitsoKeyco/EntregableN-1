import { useState } from 'react'
import ButtonPhrase from '../components/ButtonPhrase'
import PhrasesCard from '../components/PhrasesCard'
import phrases from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFromArray'

import './App.css'

const arrBg = [1, 2, 3, 4]

function App() {
  
  const initialValue = randomElementFromArray(phrases);
  const bgRandom = randomElementFromArray(arrBg);
  
  const [phrasesRandom, setPhrasesRandom] = useState(initialValue);
  const [pathRandom, setPathRandom] = useState(bgRandom)

  const objStyle = {
    backgroundImage: `url('./img/fondo${pathRandom}.jpg')`,
    width: '100%',
    backgroundSize: 'cover',
  }

  return (
    <>
    <div style={objStyle} className="app">
        <h1 className='title'>GALLETAS DE LA FORTUNA</h1>
        
            <PhrasesCard phrasesRandom={phrasesRandom}/>
          
          <div className="buttonClass">
            <ButtonPhrase setPhrasesRandom={setPhrasesRandom} phrases={phrases} setPathRandom={setPathRandom} arrBg={arrBg}/>
          </div>
        
    </div>
      
    </>
  )
}

export default App
