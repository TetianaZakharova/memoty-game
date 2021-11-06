import { useState, useEffect } from 'react'
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

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setChoiceOne(null)
    setChoiceTwo(null)  
    setCards(shuffledCards)
    setTurns(0)
  }  
  // console.log(cards, turns)

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
      // resetTurn()
      setTimeout( () => resetTurn(), 2000)
      }  else {
        // console.log('those cards DO NOT match')
        setTimeout( () => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  // console.log(cards)

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

    // start new game automagically
    useEffect(() => {
      shuffleCards()
    }, [])

    return ( 
        <div className="CardList">
        <h1>Magic Match</h1>
        <button onClick={shuffleCards}>New Game</button>
        
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
        <p>Turns: {turns}</p>
      </div>
     );
}
