import React, { useContext } from "react";
import "./Footer.css";
import { ThemeContext } from "../../context";

const Footer = () => {
  //Get the button:
  // mybutton = document.getElementById("myBtn");
  // console.log(mybutton);

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    // scrollFunction();
  };

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 20 ||
  //     document.documentElement.scrollTop > 20
  //   ) {
  //     mybutton.style.display = "block";
  //   } else {
  //     mybutton.style.display = "none";
  //   }
  // }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    // scrollFunction();
    // document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

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
      <div className="f-auth">Copyright &copy; Sahil Pillania</div>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        Top
      </button>
    </div>
  );
};

export default Footer;
