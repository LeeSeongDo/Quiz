import { useState } from "react";

export default function Question1() {
  const [sentence, setSentence] = useState("안녕하세요");

  let StateEvent = () => {
    setSentence("반갑습니다.");
  };

  let DocumentEvent = () => {
    document.getElementById("sentence").innerText = "반갑습니다.";
  };

  return (
    <div>
      <div>
        <p>다큐먼트 방식</p>
        <span id="sentence">안녕하세요</span>
        <button onClick={DocumentEvent}>버튼을 눌러 문장을 바꿔</button>
      </div>

      <div>
        <p>다큐먼트 방식</p>
        <span>{sentence}</span>
        <button onClick={StateEvent}>버튼을 눌러 문장을 바꿔</button>
      </div>
    </div>
  );
}
