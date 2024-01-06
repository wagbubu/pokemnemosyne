import PropTypes from "prop-types";

export default function HighScore({ highScore }) {
  return (
    <h1 className="glow-green text-2xl font-pixelifySans">
      HighScore: {highScore}
    </h1>
  );
}

HighScore.propTypes = {
  highScore: PropTypes.number,
};
