import React from "react";
import "./GridBars.scss";

export default function GridBars() {
  return (
    <div className="grid-bar-container">
      <div className="grid-bar-item bar__negative">
        <p>Negative</p>
        <div className=" grid-bar negative">80%</div>
      </div>
      <div className="grid-bar-item bar__positive">
        <p>Positive</p>
        <div className=" grid-bar positive">10%</div>
      </div>
      <div className="grid-bar-item bar__other">
        <p>Other</p>
        <div className=" grid-bar other">8%</div>
      </div>
      <div className="grid-bar-item bar__flag">
        <p>Alert</p>
        <div className=" grid-bar flag">2%</div>
      </div>
    </div>
  );
}
