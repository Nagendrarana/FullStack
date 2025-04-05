import Card from "../card/card";
import "./grid.css";
function Grid({ numberOfCards }) {
  return (
    <div className="grid">
      {Array(numberOfCards)
        .fill(0)
        .map((_, idx) => (
          <Card key={idx} />
        ))}
    </div>
  );
}

export default Grid;
