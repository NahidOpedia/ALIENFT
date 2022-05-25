import React from "react";
import "./partner.css";

import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

import partner1 from "../assets/partner/image 3.png";
import partner2 from "../assets/partner/image-2.png";
import partner3 from "../assets/partner/image 1.png";

function Partner() {
  return (
    <div className="top" id="partner">
      <div className="partner container  d-none ">
        <h1 className="text-center wow fadeInDown ">Partner</h1>

        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-6 col-12 wow bounceInLeft">
            <div className="single ">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>
              <div className="img">
                <img src={partner1} alt="partner1" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 wow fadeInUp ">
            <div className="single">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>
              <div className="img">
                <img src={partner2} alt="partner1" />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12 wow bounceInRight">
            <div className="single">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>
              <div className="img">
                <img src={partner3} alt="partner1" />
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
              <h2 className="footertitle">
                Come aboard the mothership earthling…
              </h2>
              <ul className="list-unstyled d-flex">
                <li>
                  <a
                    className="link"
                    href="https://telegram.org/"
                    target="_blank"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li>
                  <a
                    className="link"
                    href="https://twitter.com/"
                    target="_blank"
                  >
                    <AiOutlineTwitter />
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
