import React from "react";
// import ReactDOM from "react-dom";
import EmblaCarousel from "../components/carousel.js"

const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <main>
    <EmblaCarousel slides={slides} />
  </main>
);

export default App
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);