import React, { useEffect, useState } from "react";
import FQAList from "../components/FQAque";
import Roadmap from "../components/Roadmap";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import FQA from "../components/FQA";

import WOW from "wowjs";
import Products from "../components/Products";
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
  console.log("Roadmap", window.pageYOffset);
  return (
    <div>
      <div className="top">
        <div className="topbanner topbannerred" style={bgstyle}>
          <Header />
          <Hero />
        </div>
      </div>

      <Roadmap />
      <Products />
      {/* <FQA /> */}
      <Partner />
    </div>
  );
};

export default Home;
