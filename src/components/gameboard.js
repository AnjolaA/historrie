import Card from "./card";
import EduCard from "./education/educard";
import { createContext, useState } from "react";
import Toggle from "./Toggle";

const EDUCATION = "EDUCATION";
const GameBoard = (props) => {
  const [mode, setMode] = useState(EDUCATION);

  const Board = () => {
    if (mode == EDUCATION) {
      return <EduCard />;
    } else {
      return <Card />;
    }
  };
  return (
    <>
      <Toggle setMode={setMode} mode={mode} />
      <h1>Board</h1>
      <Board />
    </>
  );
};

export default GameBoard;
