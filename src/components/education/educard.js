import { useContext } from "react";
import EduChoices from "./educhoices";
import GameContext from "../game";
import Info from "./info";
import score from "../../util";

const Card = () => {
  const {
    gamedata,
    counter,
    useCounter,
    setEdudata,
    edudata,
    mode,
  } = useContext(GameContext);

  const handleClick = () => {
    console.log("Clicked");
    setEdudata({
      type: "CHECK",
      question: edudata[counter.count],
    });
  };
  const handleNext = () => {
    console.log("Next");
    useCounter({
      type: "NEXT",
    });
  };

  if (counter.count < counter.end) {
    return (
      <>
        <h3>E-Mode</h3>
        <h4>Card Question: {edudata[counter.count].question}</h4>
        <EduChoices
          options={edudata[counter.count].options}
          question={edudata[counter.count]}
          property={{ setEdudata }}
        />
        <Info
          info={edudata[counter.count].context}
          answered={edudata[counter.count].answered}
        />
        <button onClick={handleClick}>Submit</button>
        <button onClick={handleNext}>Next</button>
      </>
    );
  } else {
    console.log(gamedata);
    const finalScore = score(edudata);
    return (
      <>
        <h1>THE END</h1>
        Score: {finalScore.score}/{finalScore.total}
      </>
    );
  }
};

export default Card;
