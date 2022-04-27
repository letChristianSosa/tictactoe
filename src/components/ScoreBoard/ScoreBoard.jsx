import "./ScoreBoard.css";

const ScoreBoard = ({ scoreX, scoreO }) => (
  <div className="score-board">
    <div className="score-board-X">{scoreX}</div>
    <div className="score-board-O">{scoreO}</div>
  </div>
);

export default ScoreBoard;
