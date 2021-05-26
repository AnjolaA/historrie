import { set } from "lodash";
import "./Toggle.css";
const Toggle = ({ setMode, mode }) => {
  const handleChange = () => {
    console.log("Toggled");
    if (mode == "EDUCATION") {
      setMode("GAME");
    } else {
      setMode("EDUCATION");
    }
  };
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={handleChange} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default Toggle;
