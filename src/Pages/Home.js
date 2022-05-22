import React, { useState } from "react";
import FQAList from "../components/FQAque";
import Roadmap from "../components/Roadmap";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import FQA from "../components/FQA";
const Home = () => {
  const [bgstyle, setBgstyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
    };

    setBgstyle(newStyle);
  }, 200);

  return (
    <div>
      <div className="top">
        <div className="topbanner" style={bgstyle}>
          <Header />
          <Hero />
        </div>
      </div>

      <Roadmap />
      {/* <FQA /> */}
      <FQA />
      {/* <FQAList /> */}
      <Partner />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
