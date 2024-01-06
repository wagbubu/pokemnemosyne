import { useEffect, useState } from "react";
import fetchData from "../assets/fetchData";
import PropTypes from "prop-types";
import capitalizeFirstLetter from "../assets/capitalizeFirstLetter";

export default function Pokemon({ name, id, isClicked, isFlipped }) {
  const [sprite, setSprite] = useState(null);

  useEffect(() => {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetchData(url).then((data) => setSprite(data.sprites.front_default));
  }, [name]);

  const handleClick = () => {
    isClicked(id);
  };

  return (
    <div className="whole-card">
      <div className={isFlipped ? "flipped" : ""}>
        <button onClick={handleClick}>
          <div className="card-front border-solid border-amber-300 border-2 bg-amber-100 duration-300 ease-in-out card my-2 mx-2 px-2 py-2 shadow-md">
            <div className="flex flex-col justify-center items-center h-44 w-max rounded-xl hover:border-amber-500 border-solid border-2 border-amber-200">
              <figure className="px-6 pt-6">
                <img
                  width="100"
                  src={sprite}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="pb-3">
                <h2 className="card-title">{capitalizeFirstLetter(name)}</h2>
              </div>
            </div>
          </div>
        </button>
        <div className="card-back card my-2 mx-2 px-2 py-2 shadow-md">
          <div className="h-44 flex flex-col justify-center items-center w-max rounded-xl border-solid border-2 border-amber-200">
            <figure className="px-6">
              <img
                width="100"
                src="../assets/back-card.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

Pokemon.propTypes = {
  name: PropTypes.string,
  endCurrentStage: PropTypes.func,
  incrementPoint: PropTypes.func,
  reset: PropTypes.bool,
  shuffle: PropTypes.func,
  isClicked: PropTypes.func,
  id: PropTypes.string,
  isFlipped: PropTypes.bool,
};
