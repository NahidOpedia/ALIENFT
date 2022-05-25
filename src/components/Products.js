import React from "react";
import "./Products.css";

import product1 from "../assets/products/WhatsApp Image 2022-05-24 at 10.21.14 AM.jpeg";
import product2 from "../assets/products/WhatsApp Image 2022-05-24 at 10.21.15 AM (1).jpeg";
import product3 from "../assets/products/WhatsApp Image 2022-05-24 at 10.21.15 AM.jpeg";
import product4 from "../assets/products/WhatsApp Image 2022-05-24 at 10.21.16 AM (1).jpeg";
import product5 from "../assets/products/WhatsApp Image 2022-05-24 at 10.21.16 AM (2).jpeg";
import product6 from "../assets/products/WhatsApp Image 2022-05-24 at 10.21.16 AM.jpeg";

function Products() {
  return (
    <div id="nft" className="top products">
      <div className="container">
        <h4 className="pera">NFT Products</h4>
        <div className="row">
          {[product1, product2, product3, product4, product5, product6].map(
            (item, index) => (
              <div
                className="wow fadeIn col-xl-4 col-md-6 col-12"
                data-wow-duration="3s"
                data-wow-delay={`0.${index}s`}
              >
                <div className="content">
                  <div className="img">
                    <img className="img-fluid" src={item} alt="" />
                  </div>
                  <div className="des">
                    <h4>Whitelist Price: 250 Cro</h4>
                    <h4>Public Mint: 300</h4>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
