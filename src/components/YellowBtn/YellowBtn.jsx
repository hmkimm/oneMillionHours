import "./YellowBtn.css";
import React from "react";

export default function YellowBtn(props) {
  return (
    <div>
      <button className="btn">{props.txt}</button>
      {/* <img className="pointer" src="/pointer.png" /> */}
    </div>
  );
}
