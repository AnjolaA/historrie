import { useContext } from "react";
import Choices from "./choices";
import GameContext from "./game";
import score from "../util";
const Card = () => {
  const { gamedata, counter, useCounter, setGamedata } = useContext(
    GameContext
  );

  const handleClick = () => {
    useCounter({
      type: "NEXT",
    });
  };

  if (counter.count < counter.end) {
    return (
      <>
        <h4>Card Question: {gamedata[counter.count].question}</h4>
        <Choices
          options={gamedata[counter.count].options}
          question={gamedata[counter.count]}
          property={{ setGamedata }}
        />
        <button onClick={handleClick}>Next</button>
      </>
    );
  } else {
    console.log(gamedata);
    const finalScore = score(gamedata);
    return (
      <>
        <h1>THE END</h1>
        Score: {finalScore.score}/{finalScore.total}
      </>
    );
  }
};

export default Card;
