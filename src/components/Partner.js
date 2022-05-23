import React from "react";
import "./partner.css";

import partner1 from "../assets/partner/image 3.png";
import partner2 from "../assets/partner/image-2.png";
import partner3 from "../assets/partner/image 1.png";

function Partner() {
  return (
    <div className="top ">
      <div className="partner container">
        <h1 className="text-center wow fadeInDown">Partner</h1>

        <div className="row ">
          <div className="col-md-4 wow fadeInTopLeft">
            <div className="single ">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>
              <div className="img">
                <img src={partner1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp ">
            <div className="single">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>
              <div className="img">
                <img src={partner2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-4 wow fadeInTopRight">
            <div className="single">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>
              <div className="img">
                <img src={partner3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner footer container py-5">
        <div className="row ">
          <div className="col-md-10 offset-md-1">
            <div className="single ">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>
              <h2>Come aboard the mothership earthling…</h2>
              <ul className="d-flex">
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-discord social-icon"></i>
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter social-icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
