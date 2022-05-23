import React, { useEffect, useState } from "react";
import "./FQA.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const sammy = [
  {
    id: 1,
    title: "How many ALIENFTS will be minted?",
    details: "2500 AIENFT gen 2s will be minted!",
    delay: 0.1,
  },
  {
    id: 2,
    title: "What will the mint price be?",
    details: "2500 AIENFT gen 2s will be minted!",
    delay: 0.2,
  },
  {
    id: 3,
    title: "Is Cronos ALIENFT team doxed?",
    details: "2500 AIENFT gen 2s will be minted!",
    delay: 0.3,
  },
  {
    id: 4,
    title: "Does ALIENFT have any partners?",
    details: "2500 AIENFT gen 2s will be minted!",
    delay: 0.4,
  },
  {
    id: 5,
    title: "Giving back to the community and charitable donations?",
    details: "2500 AIENFT gen 2s will be minted!",
    delay: 0.5,
  },
  {
    id: 6,
    title: "Will ALIENFT have a rarity ranking system?",
    details: "2500 AIENFT gen 2s will be minted!",
    delay: 0.6,
  },
];

const FQA = () => {
  const [toggle, setToggle] = useState(false);
  const [selecred, setSelecred] = useState(1);

  return (
    // <ReactWOW animation="fadeIn">
    <div className="topfaq">
      <div className="wow bounceInLeft faq-container">
        {sammy.map((item, index) => (
          <div
            className={`accord-body wow bounceInLeft animate__delay-${index}s`}
            data-wow-duration="2s"
            data-wow-delay={`${item.delay}s`}
          >
            <div className="shape"></div>
            <div className="shape-2"></div>
            <div className="shape-3"></div>
            <div className="shape-4"></div>
            <button className="costom-css1 ">
              <p></p>
              <p className="title text-center">{item.title}</p>
              {/* <FontAwesomeIcon
              onClick={() => {
                setToggle(!toggle);
              }}
              icon={toggle ? faAngleRight : faChevronDown}
              className="p-3 basic-tran"
            /> */}

              <p
                className="icons"
                onClick={() => {
                  setToggle(!toggle);
                  selecred !== item.id && setSelecred(item.id);
                }}
              >
                {selecred === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </button>

            {selecred === item.id && (
              <p className={`${!toggle ? "details" : "details-hiden"}`}>
                {item.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
    // </ReactWOW>
  );
};

export default FQA;
