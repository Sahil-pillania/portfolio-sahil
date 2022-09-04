import React, { useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
// import logo from "../../Images/logo.jpg";
import logo2 from "../../Images/logo2.png";
import { ThemeContext } from "../../context";

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);

  return (
    <div className="h">
      <nav
        className="navbar navbar-expand-lg "
        style={{
          backgroundColor: darkMode ? "black !important" : "white",
          color: darkMode ? "white !important" : "black !important",
        }}
      >
        <div className="container-fluid mx-4">
          <NavLink className="navbar-brand" to="/">
            <img src={logo2} alt="logo" className="h-logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
