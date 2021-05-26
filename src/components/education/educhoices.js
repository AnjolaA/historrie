import { useEffect } from "react";
import { useState } from "react";

const EduChoices = ({ options, question, property }) => {
  const { setEdudata } = property;
  // let count = question.qid - 1;
  // console.log(question.choice === "b");

  function checker(item) {
    console.log("===Selected======");
    console.log(item.id);
    console.log(question.answer);
    console.log(question.choice);
    console.log(question.answered);
    console.log("==============");
    if (question.choice == undefined) {
      return "";
    }
    // if (question.answer == undefined) return "";
    if (question.answered) {
      if (question.answer != item.id) return "red";
      if (question.answer == item.id) return "green";
    }
  }
  // useEffect(() => {});
  const sele = (e) => {
    // e.preventDefault();
    setEdudata({
      type: "SELECT",
      choice: e.target.id,
      question: question.qid,
    });
  };

  return options.map((item) => (
    <div key={item.id} style={{ color: checker(item) }}>
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

export default EduChoices;
