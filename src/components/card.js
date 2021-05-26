import { useContext } from "react";
import Choices from "./choices";
import GameContext from "./game";
import score from "../util";
const Card = () => {
  const { gamedata, counter, useCounter, setGamedata, mode } = useContext(
    GameContext
  );

  const handleClick = () => {
    useCounter({
      type: "NEXT",
    });
  };

  if (counter.count < counter.end) {
    console.log("====MODE=====");
    console.log(mode);
    console.log("====MODE=====");
    return (
      <>
        <h3>G-Mode</h3>
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
