import First from "./components/First/First";
import "./App.css";
import Second from "./components/Second/Second";
import YellowBtn from "./components/YellowBtn/YellowBtn";
import Third from "./components/Third/Third";
import { useState } from "react";

function App() {
  let [downTxt, setDownTxt] = useState([
    "당신은",
    "프로그래밍",
    "전문가가 되기 위해서",
    "대략",
    "5110",
    "일 이상 훈련하셔야 합니다! :)",
  ]);

  let [btnTxt, setBtnTxt] = useState([
    "나는 며칠동안 훈련을 해야 1만 시간이 될까?",
    "훈련하러 가기 GO!GO!",
  ]);
  let [inp, setInp] = useState("");
  return (
    <div>
      {/* <img className="clock" src="/clock.png" /> */}
      <img
        className="title-img"
        src="/title.png"
        style={{ marginTop: 194, marginBottom: 125 }}
      />

      <img src="/onemillion.png" style={{ marginBottom: 78 }} />
      <First />
      <Second
        onChange={(e) => {
          setDownTxt(e.target.value);
        }}
      />
      <YellowBtn txt={btnTxt[0]} />
      <Third
        className="third"
        downTxt={downTxt[0]}
        downTxt1={downTxt[1]}
        downTxt2={downTxt[2]}
      />
      <Third
        className="third"
        downTxt={downTxt[3]}
        downTxt1={downTxt[4]}
        downTxt2={downTxt[5]}
      />
      <YellowBtn txt={btnTxt[1]} />
      {/* <YellowBtn txt={btnTxt[1]} style={{ backgroundColor: "red" }} /> */}
    </div>
  );
}
export default App;
