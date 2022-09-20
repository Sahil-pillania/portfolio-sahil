import React, { useContext } from "react";
import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GoToTop from "./components/GoToTop";
import { Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "styled-components";

function App() {
  // const themes = {
  //   colors: {
  //     heading: "rgb(24,24,29)",
  //     btn: "rgb(98,84,243)",

  //     gradient:
  //       "linear-gradient(0deg, rgb(132 144, 255) 0%, rgb(98, 189, 252) 100%)",
  //     shadow:
  //       "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15)0px 0px 0px 1px",
  //     shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
  //   },
  //   media: {
  //     mobile: "768px",
  //     tab: "998px",
  //   },
  // };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "White",
        color: darkMode && "White",
      }}
    >
      <Header />
      <Toggle />

      <Routes>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          element={[
            <Intro key="1" />,
            <About key="2" />,
            <ProductList key="3" />,
            <Contact key="4" />,
          ]}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Projects" element={<ProductList />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
