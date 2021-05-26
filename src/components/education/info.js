const Info = ({ info, answered }) => {
  if (answered) {
    return (
      <>
        <p>{info}</p>
      </>
    );
  } else {
    return "";
  }
};

export default Info;
