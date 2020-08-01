import React from "react";
import "./css/RulesModal.css";

const RulesModal = ({ openModal, setOpenModal }) => {
  return (
    <>
      <button onClick={() => setOpenModal(!openModal)}>View Rules</button>
      <div className={openModal ? "rulesModal" : "rulesModalHide"}>
        <div className="rulesFlex">
          <div className="rulesText">
            <h5 className="rulesHeader">Rules</h5>
            <ul className="listNone">
              <li>
                Any live cell with fewer than two live neighbors dies, as if
                caused by under-population.
              </li>{" "}
              <li>
                {" "}
                Any live cell with two or three live neighbors lives on to the
                next generation.{" "}
              </li>
              <li>
                Any live cell with more than three live neighbors dies, as if by
                over-population..{" "}
              </li>
              <li>
                Any dead cell with exactly three live neighbors becomes a live
                cell, as if by reproduction.
              </li>
            </ul>
            <button className="closeButton" onClick={() => setOpenModal(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RulesModal;
