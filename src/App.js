import GameBoard from "./components/gameboard";
import GameContext from "./components/game";
import { useReducer } from "react";
import data from "./data";
import "./styles.css";

function reducer(state, action) {
  switch (action.type) {
    case "ANSWER":
      let location = state.findIndex((item) => item.qid === action.question);
      let newStateArray = [...state];
      newStateArray[location] = {
        ...newStateArray[location],
        choice: action.choice,
      };
      return [...newStateArray];
    default:
      return state;
  }
}

const reducerNext = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return { count: state.count + 1, end: state.end };
    default:
      return "";
  }
};

const config = { count: 0, end: 10 };
export default function App() {
  const [gamedata, setGamedata] = useReducer(reducer, data);
  const [counter, useCounter] = useReducer(reducerNext, config);

  return (
    <GameContext.Provider
      value={{
        gamedata,
        setGamedata,
        counter,
        useCounter,
      }}
    >
      <GameBoard />
    </GameContext.Provider>
  );
}
