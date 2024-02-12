import { useState } from 'react'
import Grid from './components/cards'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const [highScore, setHighScore] = useState(0);

  function updateCounter() {

  }

  function updateHighScore() {
    if (counter > highScore) {
      setHighScore(counter);
    }
  }

  return (
    <>
      <div className="header">
        <h1>Game of Memory</h1>
        <p>Score: {counter}</p>
        <p>High Score: {highScore}</p>
      </div>
      <Grid counter={counter} updateCounter={updateCounter} highScore={highScore} updateHighScore={updateHighScore} />
    </>
  )
}

export default App
