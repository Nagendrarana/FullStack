import Icon from "../icon/icon";
import "./card.css";

function Card({ iconName, onPlay, highlight }) {
  return (
    <div
      className={`card ${highlight ? "highlight" : ""}`}
      onClick={onPlay}
    >
      <Icon name={iconName ? iconName : "pen"} />
    </div>
  );
}

export default Card;
