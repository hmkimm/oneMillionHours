import React from "react";
import "./Third.css";

export default function Third(props) {
  return (
    <div className="third">
      <span>{props.downTxt}</span>
      <strong className="strong">{props.downTxt1}</strong>
      <span>{props.downTxt2}</span>
    </div>
  );
}
