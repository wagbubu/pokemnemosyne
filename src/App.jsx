import GameOver from "./components/GameOver";
import Header from "./components/Header";
import PokemonCardList from "./components/PokemonCardList";
import fetchData from "./assets/fetchData";
import { v4 as uuid } from "uuid";

import { useState, useEffect } from "react";

export default function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [data, setData] = useState(null);
  const [cards, setCards] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  //FETCH 10 POKEMONS
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10";
    fetchData(url).then((data) => {
      if (data.results) {
        const pokemonCards = data.results.map((e) => {
          let newObj = { id: uuid(), ...e, clicked: false };
          return newObj;
        });
        setData(pokemonCards);
      }
    });
  }, []);
  //IF FETCH IS DONE GET 5 RANDOM POKEMONS TO SHOW
  useEffect(() => {
    if (data && currentScore < 10) {
      shuffle(data);
    }
  }, [data, currentScore]);

  //SET IS FLIPPED BACK TO FALSE
  const switchIsFlipped = () => {
    setTimeout(() => {
      setIsFlipped(false);
    }, 1500);
  };

  //SHUFFLE FUNCTION
  const shuffle = (array) => {
    let shuffledCharacters = [];
    let clicked = 0;

    while (shuffledCharacters.length < 4) {
      if (clicked == 4) {
        break;
      }
      console.log("loop");
      const randNum = Math.floor(Math.random() * array.length);
      const character = array[randNum];
      if (clicked !== 4) {
        if (
          !shuffledCharacters.includes(character) &&
          (clicked < 3 || !character.clicked)
        ) {
          shuffledCharacters.push(character);
          clicked += +character.clicked;
        }
      }
      setCards(shuffledCharacters);
    }
  };

  function endCurrentStage() {
    const pokemons = data.map((e) => {
      let newObj = { ...e, clicked: false };
      return { ...newObj };
    });

    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    setGameStatus("lose");
    setData(pokemons);
    setCurrentScore(0);
  }

  //CLICKED FUNCTION
  function isClicked(id) {
    //get the object from cards
    const pokemon = data.find((e) => e.id === id);
    //if the clicked property of that object is true
    if (currentScore == 9 && !pokemon.clicked) {
      setGameStatus("win");
    }
    if (pokemon.clicked) {
      // end current stage
      endCurrentStage();
    }
    // else
    else {
      setIsFlipped(true);
      switchIsFlipped();
      // increment point
      incrementPoint();
      // set that object's clicked property to true
      let index = data.indexOf(pokemon);
      let newData = [...data];
      newData[index] = { ...pokemon, clicked: true };
      setData(newData);
      // shuffle data
    }
    console.log(data);
  }

  function resetGame() {
    endCurrentStage();
    setGameStatus("");
    console.log("reset");
  }

  function incrementPoint() {
    setCurrentScore((prevScore) => prevScore + 1);
  }

  return (
    <>
      {gameStatus == "win" ? (
        <GameOver gameStatus={gameStatus} resetGame={resetGame}></GameOver>
      ) : gameStatus == "lose" ? (
        <GameOver gameStatus={gameStatus} resetGame={resetGame}></GameOver>
      ) : (
        ""
      )}

      <div className="h-screen bg-[url('../assets/pokemon-bg.gif')] bg-no-repeat bg-cover">
        <div className="bg-slate-50 h-screen py-16 px-8 bg-opacity-25">
          <Header highScore={highScore} currentScore={currentScore}></Header>
          <PokemonCardList
            isFlipped={isFlipped}
            isClicked={isClicked}
            cards={cards}
            incrementPoint={incrementPoint}
            endCurrentStage={endCurrentStage}
            currentScore={currentScore}
            setGameStatus={setGameStatus}
          ></PokemonCardList>
        </div>
      </div>
    </>
  );
}
