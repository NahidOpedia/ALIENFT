import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="timeline_section top"
      style={{
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <div className="container">
        <div className="timeline__title">
          <h4>Utility & Roadmap</h4>
        </div>
      </div>
      <div className="timeline">
        <div
          className="section left section__one"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="content">
            <div className="content__title">
              <span>Phase 1 Q3</span>
            </div>
            <div className="content__list">
              <ul>
                <li>$Piratebux presale</li>
                <li>Public sale of $Piratebux</li>
                <li>Pirate Bux website redesign</li>
                <li>Gen 1 NFTs Launch with Utility for Token holders</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="section right section__two"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="content">
            <div className="content__title">
              <span>Phase 2 Q3</span>
            </div>
            <div className="content__list">
              <ul>
                <li>Gen 2 NFTs Launch Outbreak</li>
                <li>Staking Platform released</li>
                <li>IRL events</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="section left section__three"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="content">
            <div className="content__title">
              <span>Phase 3 Q4</span>
            </div>
            <div className="content__list">
              <ul>
                <li>Gen 3 NFTs launch Evolution</li>
                <li>Rev share liquidity pools</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="section right section__four"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="content">
            <div className="content__title">
              <span>Phase 4</span>
            </div>
            <div className="content__list">
              <ul>
                <li>DAO setup</li>
                <li>Roadmap 2.0 Q4 and beyond</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
