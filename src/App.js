import GameBoard from "./components/gameboard";
import GameContext from "./components/game";
import { useReducer } from "react";
import data from "./data";
var _ = require("lodash");
import "./styles.css";

function reducer(state, action) {
  switch (action.type) {
    case "ANSWER":
      console.log(`Pull out question: ${action.question}`);
      let location = state.findIndex((item) => item.qid === action.question);
      let newArray = [...state];
      newArray[location] = { ...newArray[location], choice: action.choice };
      // console.log(newArray);

      return [...newArray];
    default:
      return state;
  }
}

function reducerr(state, action) {
  switch (action.type) {
    case "ANSWER":
      let dd = "";
      let ee = "";
      console.log("==== ARRAY ===");
      console.log(state);
      if (state.length !== 0) {
        console.log("Stay is not empty");
        console.log(action.value.question);
        console.log(state);
        // dd = state.filter((item) => item.question === action.value.question);
        dd = state.filter((item) => item.question === action.value.question);
        ee = _.remove(state, (item) => item.question === action.value.question);
        // var evens = _.remove(state, function (item) {
        //   return item.question === action.value.question;
        // });
      } else {
      }
      console.log("ARUGBO");
      console.log(dd);
      console.log(ee);
      // console.log(evens);
      console.log("==========");
      const arr = [...state, action.value];
      return arr;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}
const reducerNext = (state, action) => {
  switch (action.type) {
    case "NEXT":
      // if(state.count === state.end) {
      //   return []
      // }
      const nunu = { count: state.count + 1, end: state.end };
      // console.log(nunu);
      return nunu;
    case "CHECK":
      console.log("Check");
      console.log(`Correct answer is ${action.answer}`);
      console.log(`Question ID is: ${action.question}`);
      return state;
      break;
    default:
      console.log("None");
      return "";
  }
};

const config = { count: 0, end: 10 };
export default function App() {
  const [gamedata, setGamedata] = useReducer(reducer, data);
  const [answered, setAnswer] = useReducer(reducerr, []);
  const [counter, useCounter] = useReducer(reducerNext, config);

  return (
    <GameContext.Provider
      value={{
        gamedata,
        setGamedata,
        answered,
        setAnswer,
        counter,
        useCounter
      }}
    >
      <GameBoard />
    </GameContext.Provider>
  );
}
