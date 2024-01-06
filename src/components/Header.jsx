import CurrentScore from "./CurrentScore";
import HighScore from "./HighScore";
import TitleLogo from "./TitleLogo";
import PropTypes from "prop-types";

export default function Header({ currentScore, highScore }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <TitleLogo></TitleLogo>
        <HighScore highScore={highScore}></HighScore>
        <CurrentScore currentScore={currentScore}></CurrentScore>
      </div>
    </>
  );
}

Header.propTypes = {
  currentScore: PropTypes.number,
  highScore: PropTypes.number,
};
