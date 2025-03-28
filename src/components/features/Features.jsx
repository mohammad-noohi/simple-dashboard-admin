import React from "react";
import "./Features.css";
// icons
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export default function Features() {
  return (
    <div className="features">
      <div className="feature">
        <span className="feature__title">Revanue</span>
        <div className="feature__container">
          <span className="feature__money">$2,415</span>
          <span className="feature__rate">
            -11.4
            <FaArrowDown className="feature__icon feature__icon--negative" />
          </span>
        </div>
        <span className="feature__sub">compaired with last month</span>
      </div>

      <div className="feature">
        <span className="feature__title">Sales</span>
        <div className="feature__container">
          <span className="feature__money">$2,415</span>
          <span className="feature__rate">
            -1.4
            <FaArrowDown className="feature__icon feature__icon--negative" />
          </span>
        </div>
        <span className="feature__sub">compaired with last month</span>
      </div>

      <div className="feature">
        <span className="feature__title">Cost</span>
        <div className="feature__container">
          <span className="feature__money">$2,415</span>
          <span className="feature__rate">
            +2.4
            <FaArrowUp className="feature__icon" />
          </span>
        </div>
        <span className="feature__sub">compaired with last month</span>
      </div>
    </div>
  );
}
