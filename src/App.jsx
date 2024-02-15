import { useState, useEffect } from 'react'
import Grid from './components/cards'
import Popup from './components/popup'
import Greyout from './components/greyout'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0)

  const [highScore, setHighScore] = useState(0);

  const [cards, setCards] = useState([]);

  const [playedCards, setPlayedCards] = useState([]);

  const [popupShow, setPopupShow] = useState(false);

  const [popupMessage, setPopupMessage] = useState(['Try Again'])

  function popupSwitch() {
    setPopupShow(!popupShow)
  }

  function updateCounter() {
    setCounter(counter+1)
  }

  function updateHighScore() {
    if (counter > highScore) {
      setHighScore(counter);
    }
  }

  function shuffleCards() {
      for (let i = cards.length-1; i>0; i--) {
          const j = Math.floor(Math.random() * (i+1));
              const temp = cards[i]
              cards[i] = cards[j]
              cards[j] = temp;
      }
      setCards([...cards])
  }

  function playCard(event) {
      let card = cards.filter((card) => card.id==event.target.id)
      console.log(card)
      if (playedCards.includes(card[0])) {
        popupSwitch();
        updateHighScore();
        setCounter(0);
        setPlayedCards([])
      } else {
        setPlayedCards(oldPlayedCards => [...oldPlayedCards, card[0]])
        shuffleCards();
        updateCounter();
        if(counter > 10) {
          setPopupMessage('You win!!')
          popupSwitch();
          updateHighScore(12);
          setCounter(0);
        }
      }

  }

  useEffect(() => {
      fetch("https://thronesapi.com/api/v2/Characters", {
              mode: 'cors'
              }
          )
      .then((res) => {
          document.querySelector(".loader-div").style.display = "none"
          return res.json();
      })
      .then(data => {
      const cards = data.slice(0,12)
      setCards(cards);
  })
  }, [])

  return (
    <>
      <Greyout popupShow={popupShow}/>
      <div className="header">
        <div id="loader-div" className='loader-div'>
          <span className="loader" ></span>
          <h3>Please wait...</h3>
        </div>
        
        <h1>Game of Memory</h1>
        <h3>Click through each character without repeating...</h3>
        <div className="scores">
          <h4>Score: {counter}</h4>
          <h4>High Score: {highScore}</h4>
        </div>

      </div>
      <Popup popupMessage={popupMessage} popupShow={popupShow} popupSwitch={popupSwitch}/>
      <Grid counter={counter} updateCounter={updateCounter} highScore={highScore} updateHighScore={updateHighScore} cards={cards} playCard={playCard} />
    </>
  )
}

export default App
