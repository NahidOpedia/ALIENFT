import React from "react";
import "./Header.css";

import logo from "../assets/logo/logo.png";

function Header() {
  return (
    <div className="desktop">
      {/* desktop header */}
      <div className="container-custome headerC">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="navmenu col-md-8">
            <ul>
              <li>Roadmap</li>
              <li>FAQ</li>
              <li>Partner</li>
              <li className="action">
                <div className="border1"></div>
                <div className="border2"></div>
                <div className="border3"></div>
                <div className="border4"></div>
                Mint date:
                <b className="px-1">May 14th 2:00pm est Lootpad.io</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* mobile header */}
    </div>
  );
}

export default Header;
