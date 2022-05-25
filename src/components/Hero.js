import React, { useState } from "react";
import "./Hero.css";
import LoaderProgress from "./LoaderProgress/LoaderProgress";

function Hero() {
  const [style, setStyle] = useState({});
  const [pricingstyle, setPricingstyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      height: "370px",
    };
    const newStyle2 = {
      width: "100%",
    };

    setStyle(newStyle);
    setPricingstyle(newStyle2);
  }, 600);

  return (
    <div className="hero">
      <div className="container-custome herosection">
        {/* details */}

        <div className="row traits">
          <div className="col-xl-6 col-md-12 col-12">
            <div className="details">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>

              <h1 className="heroh1">2500 NFTs with over 100 traits</h1>

              <div className="hero-content" style={style}>
                <p className="pera mb-4">
                  Pirate Bux is a passive income generating token with its own
                  protocol-owned liquidity on the Cronos Blockchain. A 12% buy
                  tax is levied on evert purchase consisting of 6% which will
                  provide MMF reflections on every buy and sell of the token for
                  its holders, 2% token burn, 2% LP, and 2 POL. On every sale,
                  14% is levied, and the additional 2% is levied for future NFT
                  reward
                </p>
                <p className="pera">
                  After a long hard month our gen 1 aliens have finally set up a
                  reconnaissance base on earth, with this new base our aliens
                  plan on setting up a new home to house and welcome the arrival
                  of the gen 2 aliens, These lovely life forms aren’t suspected
                  to arrive until may 14th 2:00pm est with an ensemble of high
                  focus fashion and a quirky pop culture design sure to please
                  everyone they come in contact with!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-12"></div>
        </div>

        <div className="row priceing">
          <div className="col-xl-4 col-md-6  col-12">
            <div className="details" style={pricingstyle}>
              <div className="border1"></div>
              <div className="border4"></div>

              <div className="hero-content secondcontent" style={style}>
                <p className="pera">Public Price: 250 CRO</p>
                <b className="peraB">225 CRO for Gen 1 holders and WL</b>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-5 col-12  offset-xl-1 offset-1">
            <div className="details1">
              <div className="hero-content">
                <b>Count down till the arrival!</b>
                <LoaderProgress />
              </div>
            </div>
          </div>
        </div>

        {/* price */}
      </div>
    </div>
  );
}

export default Hero;
