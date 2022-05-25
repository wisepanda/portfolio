import React from "react";
// import ReactDOM from "react-dom";
import EmblaCarousel from "../components/carousel.js";
import Navbar from "../components/navbar.js";

import rickAndMorty from "../components/media/rick&morty.png";
import toDo from "../components/media/toDo1.png";
import pokeApi from "../components/media/pokeAPI.png";
import invincibles from "../components/media/invincibles.png";

const _slides = [
   { id: 0, image: rickAndMorty },
   { id: 1, image: toDo },
   { id: 2, image: pokeApi },
   { id: 3, image: invincibles },
];

const App = () => (
   <main>
      <Navbar link={"/"} pageName={"Home"}/>
      <EmblaCarousel slides={_slides} />
   </main>
);

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
