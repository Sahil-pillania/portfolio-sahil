import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../context";

const Footer = () => {
  // function topFunction() {
  //   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  // }

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="f"
      style={{
        backgroundColor: darkMode ? "black" : "White",
        color: darkMode && "white",
      }}
    >
      <div className="f-auth">
        Copyright &copy; Sahil Pillania - {new Date().getFullYear()}
      </div>
      {/* <button onClick={topFunction} id="myBtn" title="Go to top">
        Top
      </button> */}
    </div>
  );
};

export default Footer;
