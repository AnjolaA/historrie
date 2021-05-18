import { useEffect } from "react";
import { useState } from "react";

const Choices = ({ options, question, property }) => {
  const { setGamedata } = property;
  // let count = question.qid - 1;
  // console.log(question.choice === "b");

  // useEffect(() => {});
  const sele = (e) => {
    // e.preventDefault();
    setGamedata({
      type: "ANSWER",
      choice: e.target.id,
      question: question.qid
    });
  };
  return options.map((item) => (
    <div key={item.id}>
      <input
        type="radio"
        id={item.id}
        name={question.qid}
        value={item.choice}
        onChange={sele}
        checked={item.id === question.choice}
      />
      <label htmlFor={item.id}>{item.choice}</label>
    </div>
  ));
};

export default Choices;
