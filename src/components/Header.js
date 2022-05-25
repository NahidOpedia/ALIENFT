import React, { useState } from "react";
import "./Header.css";
import { CgMenuRight } from "react-icons/cg";

import logo from "../assets/logo/logo.png";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="desktop">
      {/* desktop header */}
      <div className="container-custome headerC">
        <div className="row">
          <div className="col-4">
            <div className="logo">
              <img className="img-fluid" src={logo} alt="" />
            </div>
          </div>
          <div className="navmenu col-md-8">
            <ul>
              <li onClick={() => setMenu(!menu)}>
                <a className="link" href="#roadmap">
                  Roadmap
                </a>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <a className="link" href="#nft">
                  NFT
                </a>
              </li>
              {/* <li>
                <a className="link" href="#partner">
                  Partner
                </a>
              </li> */}
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

          <div className="navmenures col-8">
            <div className="sidebar">
              <CgMenuRight onClick={() => setMenu(!menu)} />
              {menu && (
                <div
                  className="dropdown"
                  style={{
                    top: menu && "11%",
                    transition: menu && "2s ease 0.5s",
                  }}
                >
                  <ul>
                    <li onClick={() => setMenu(!menu)}>
                      <a className="link" href="#roadmap">
                        Roadmap
                      </a>
                    </li>
                    <li onClick={() => setMenu(!menu)}>
                      <a className="link" href="#nft">
                        NFT
                      </a>
                    </li>
                    {/* <li>
                      <a className="link" href="#partner">
                        Partner
                      </a>
                    </li> */}
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
              )}
            </div>
          </div>
        </div>
      </div>
      {/* mobile header */}
    </div>
  );
}

export default Header;
