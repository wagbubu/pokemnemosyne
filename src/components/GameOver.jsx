import Proptypes from "prop-types";

export default function GameOver({ gameStatus, resetGame }) {
  function handleClick() {
    resetGame();
  }

  function winOrLose() {
    if (gameStatus == "win") {
      return {
        img: "../assets/happy-pikachu.gif",
        status: "You Won!",
        message: "Pikachu is Happy!",
      };
    } else if (gameStatus == "lose") {
      return {
        img: "../assets/sad-pikachu.gif",
        status: "You Lost!",
        message: "Pikachu is sad huhu..",
      };
    }
  }

  const game = winOrLose();

  return (
    <div className="h-screen w-screen absolute z-10 bg-gray-50/[0.5] mx-0 my-0">
      <div
        className={
          gameStatus == "win"
            ? "glow-win card top-1/4 m-auto w-96 bg-amber-100"
            : "glow-lose card top-1/4 m-auto w-96 bg-amber-100"
        }
      >
        <div className="card-body">
          <img src={game.img}></img>
          <h2 className="card-title">{game.status}</h2>
          <p>{game.message}</p>
          <div className="card-actions justify-end">
            <button onClick={handleClick} className="btn btn-primary">
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

GameOver.propTypes = {
  resetGame: Proptypes.func,
  gameStatus: Proptypes.string,
};
