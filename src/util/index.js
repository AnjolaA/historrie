const score = (arr) => {
  const correct = arr.filter((item) => item.answer === item.choice);
  let data = {
    score: correct.length,
    total: arr.length,
  };
  return data;
};

export default score;
