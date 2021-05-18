import Card from "./card";
import { createContext } from "react";

const GameBoard = (props) => {
  return (
    <>
      <h1>Board</h1>
      {/* {props.children} */}
      <Card />
    </>
  );
};

export default GameBoard;
