import Pokemon from "./Pokemon";
import Proptypes from "prop-types";

export default function PokemonCardList({
  currentScore,
  cards,
  isClicked,
  isFlipped,
}) {
  const pokemonCards = cards?.map((e) => (
    <Pokemon
      isFlipped={isFlipped}
      id={e.id}
      name={e.name}
      key={e.name}
      isClicked={isClicked}
      currentScore={currentScore}
    ></Pokemon>
  ));

  return (
    <>
      <div className="flex">
        <div className="m-auto lg:w-9/12 flex flex-wrap content-center justify-center">
          {pokemonCards}
        </div>
      </div>
    </>
  );
}

PokemonCardList.propTypes = {
  currentScore: Proptypes.number,
  cards: Proptypes.array,
  isClicked: Proptypes.func,
  isFlipped: Proptypes.bool,
};
