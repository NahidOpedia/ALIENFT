import React from "react";
import "./Hero.css";
import LoaderProgress from "./LoaderProgress/LoaderProgress";

function Hero() {
  return (
    <div className="hero">
      <div className="container-custome herosection">
        {/* details */}

        <div className="row">
          <div className="col-md-6">
            <div className="details">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>

              <h1>2500 NFTs with over 100 traits</h1>

              <div className="hero-content">
                <p>
                  CRONOS ALIENFT our limited gen 2 collection consists of 2500
                  NFTs with over 100 traits among 8 categories, with a variety
                  of hand-drawn attributes along with unique design sure to
                  please all life forms. We are being Deployed on the Cronos
                  Chain and sold on Lootpad.io
                </p>
                <p>
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
          <div className="col-md-6"></div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="details">
              <div className="border1"></div>
              <div className="border4"></div>

              <div className="hero-content">
                <p>Public Price: 250 CRO</p>
                <b>225 CRO for Gen 1 holders and WL</b>
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-md-1">
            <div className="details">
              <div className="hero-content">
                <p>Count down till the arrival!</p>
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
