import { useState, useEffect } from 'react'
import { useStopwatch } from 'react-timer-hook';

import './CardList.css'
import { SingleCard } from './SingleCard'

const cardImages = [
    // { "src": "/img/helmet-1.png", matched: false },
    // { "src": "/img/potion-1.png", matched: false },
    // { "src": "/img/ring-1.png", matched: false },
    // { "src": "/img/scroll-1.png", matched: false },
    // { "src": "/img/shield-1.png", matched: false },
    // { "src": "/img/sword-1.png", matched: false },
    { "src": "/img/canario.png", matched: false, "spell": "/sound/canario.m4a" },
    { "src": "/img/caracol.png", matched: false, "spell": "/sound/caracol.m4a" },
    { "src": "/img/chinchilla.png", matched: false, "spell": "/sound/chinchilla.m4a" },
    { "src": "/img/cobaya.png", matched: false, "spell": "/sound/cobaya.m4a" },
    { "src": "/img/conejo.png", matched: false, "spell": "/sound/conejo.m4a" },
    { "src": "/img/gato.png", matched: false, "spell": "/sound/gato.m4a" },
    { "src": "/img/hamster.png", matched: false, "spell": "/sound/hamster.m4a" },
    { "src": "/img/lagarto.png", matched: false, "spell": "/sound/lagarto.m4a" },
    { "src": "/img/loro.png", matched: false, "spell": "/sound/loro.m4a" },
    { "src": "/img/perro.png", matched: false, "spell": "/sound/perro.m4a" },
    { "src": "/img/pez.png", matched: false, "spell": "/sound/pez.m4a" },
    { "src": "/img/rata.png", matched: false, "spell": "/sound/rata.m4a" },
    { "src": "/img/raton.png", matched: false, "spell": "/sound/raton.m4a" },
    { "src": "/img/tortuga.png", matched: false, "spell": "/sound/tortuga.m4a" },
  ]

export const CardList = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [sound, setSound] = useState(null)   

    const { seconds, minutes, start, reset, pause} = useStopwatch({ autoStart: false });

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setChoiceOne(null)
    setChoiceTwo(null)  
    setCards(shuffledCards)
    setTurns(0)
    reset({}, false);
  }  
  // console.log(cards, turns)

  // var stopwatchOffset = new Date();
  // stopwatchOffset.setSeconds(stopwatchOffset.getSeconds());


  //handle a choice
  const handleChoice = (card) => {
    // console.log(card)
    const audio = new Audio(card.spell)
    setSound(audio.play())

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
 
  // const handleSound = (card) => {
  //   const audio = new Audio(card.spell)
  //   setSound(audio.play())
  //   // console.log(audio.play)
  // }

  const bingoSound = () => {
    const bingo = new Audio ('/sound/bingo.m4a')
      setSound(bingo.play())
  }

 useEffect(() => {
  if(choiceOne && !choiceTwo) {
    if(turns === 0) {
      start() 
    } 
  } 
 },[choiceOne])

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)       
      if (choiceOne.src === choiceTwo.src) {
        setTimeout( () => bingoSound(), 800)
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched:true}
            } else {
              return card
            }
          })
        })
      // cards.every(card => card.matched === true)
      setTimeout( () => resetTurn(), 2000)
      }  else {
        // console.log('those cards DO NOT match')
        setTimeout( () => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  useEffect(() => {
      if(cards.every(card => card.matched === true)) {
        pause()
      }
  }, [choiceTwo])

  // console.log(cards)

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

    // start new game automatically
    useEffect(() => {
      shuffleCards()
    }, [])

    return ( 
        <div className="CardList">
        <h3>Magic Match</h3>
        <div className="counter-box">
          <button onClick={shuffleCards}>New Game</button>
          <div className="counter">
            <span>Timer: {minutes}:{seconds} </span>
            <span> Turns: {turns}</span>
          </div>  
        </div>
      
        <div className="card-grid">
          {cards.map(card =>(
            <SingleCard 
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched }
              disabled={disabled}
            // handleSound={handleSound}
            />
          ))}
        </div>
      </div>
     );
}