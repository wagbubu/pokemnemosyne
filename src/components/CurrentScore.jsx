import PropTypes from "prop-types";

export default function CurrentScore({ currentScore }) {
  return (
    <>
      <h1 className="glow text-2xl mt-8 font-pixelifySans">Current Score</h1>
      <h1 className="glow text-6xl font-pixelifySans">{currentScore}</h1>
    </>
  );
}

CurrentScore.propTypes = {
  currentScore: PropTypes.number,
};
