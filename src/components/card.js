import { useContext } from "react";
import Choices from "./choices";
import GameContext from "./game";

const Card = () => {
  const {
    gamedata,
    answered,
    setAnswer,
    counter,
    useCounter,
    setGamedata
  } = useContext(GameContext);
  // console.log(gamedata);

  const handleClick = () => {
    useCounter({
      type: "NEXT"
    });
  };

  if (counter.count < counter.end) {
    return (
      <>
        <h4>Card Question: {gamedata[counter.count].question}</h4>
        <Choices
          options={gamedata[counter.count].options}
          question={gamedata[counter.count]}
          property={{ answered, setAnswer, setGamedata }}
        />
        <button onClick={handleClick}>Next</button>
      </>
    );
  } else {
    console.log(gamedata);
    return <h1>THE END</h1>;
  }
};

export default Card;
