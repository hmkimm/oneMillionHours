import "./Second.css";

import React from "react";

export default function Second(props) {
  return (
    <div className="second">
      <span>나는</span>
      <input className="input" type="text" placeholder="예)프로그래밍" />
      <span>전문가가 될 것이다.</span>
      <br />
      <span>그래서 앞으로 매일 하루에</span>
      <input
        className="input input-second"
        type="text"
        placeholder="예)5시간"
      />
      <span>시간씩 훈련할 것이다.</span>
    </div>
  );
}
