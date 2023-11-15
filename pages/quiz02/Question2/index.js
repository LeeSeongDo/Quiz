import { useState } from "react";

export default function Question1() {
  const [count, setCount] = useState(0);

  let StateEvent = () => {
    setCount(count + 1);
  };

  let DocumentEvent = () => {
    let count = Number(document.getElementById("count").innerText);
    document.getElementById("count").innerText = count + 1;
  };

  return (
    <div>
      <div>
        <p>다큐먼트 방식</p>
        <span id="count">0</span>
        <button onClick={DocumentEvent}>카운트 업!</button>
      </div>

      <div>
        <p>스테이트 방식</p>
        <span>{count}</span>
        <button onClick={StateEvent}>카운트 업!</button>
      </div>
    </div>
  );
}
