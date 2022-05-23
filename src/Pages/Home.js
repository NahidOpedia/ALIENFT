import React, { useEffect, useState } from "react";
import FQAList from "../components/FQAque";
import Roadmap from "../components/Roadmap";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import FQA from "../components/FQA";

import WOW from "wowjs";
const Home = () => {
  const [bgstyle, setBgstyle] = useState({});

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();

    setTimeout(() => {
      const newStyle = {
        opacity: 1,
      };

      setBgstyle(newStyle);
    }, 200);
  }, []);

  console.log("roadmap scroll:");
  return (
    <div>
      <div className="top">
        <div className="topbanner" style={bgstyle}>
          <Header />
          <Hero />
        </div>
      </div>

      <Roadmap />
      <FQA />
      <Partner />
    </div>
  );
};

export default Home;
