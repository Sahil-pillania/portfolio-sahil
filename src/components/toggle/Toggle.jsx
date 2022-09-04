import React, { useContext } from "react";
import "./Toggle.css";
import sun from "../../Images/sun.png";
import moon from "../../Images/moon.jpg";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={sun} alt="" className="t-icon" />
      <img src={moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 34 }}
      ></div>
    </div>
  );
};

export default Toggle;
