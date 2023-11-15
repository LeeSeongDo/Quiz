import { useState } from "react";

export default function Question1() {
  const [random, setRandom] = useState(0);

  let StateEvent = () => {
    setRandom(String(Math.floor(Math.random() * 1000000)).padStart("6", "0"));
  };

  let DocumentEvent = () => {
    document.getElementById("random").innerText = String(
      Math.floor(Math.random() * 1000000)
    ).padStart(6, "0");
  };

  return (
    <div>
      <div>
        <p>다큐먼트 방식</p>
        <span id="random">0</span>
        <button onClick={DocumentEvent}>카운트 업!</button>
      </div>

      <div>
        <p>스테이트 방식</p>
        <span>{random}</span>
        <button onClick={StateEvent}>카운트 업!</button>
      </div>
    </div>
  );
}
