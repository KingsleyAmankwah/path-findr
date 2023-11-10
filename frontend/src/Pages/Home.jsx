import React from "react";
import Hero from "../components/Hero.js";
import Body from "../components/Body.js";
import Navbar from "../components/Navbar.js";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
}

export default Home;
