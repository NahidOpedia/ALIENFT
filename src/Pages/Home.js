import React from "react";
import FQAList from "../components/FQAque";
import Roadmap from "../components/Roadmap";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partner from "../components/Partner";
import FQA from "../components/FQA";
const Home = () => {
  return (
    <div>
      <div className="top">
        <div className="topbanner">
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
