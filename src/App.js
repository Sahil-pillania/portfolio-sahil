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
import { Routes, Route, Link } from "react-router-dom";

function App() {
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
          path="/"
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
      <Footer />
    </div>
  );
}

export default App;
