import { StarStyle } from "../../../styles/selfMadeStar";
import { useState } from "react";

export default function SelfRate() {
  const [rateNumber, setRateNumber] = useState(0);

  const Rates = [
    "망작",
    "망작보다 조금 낫다..",
    "평타",
    "오 괜찮은데?",
    "명작",
  ];

  return (
    <div>
      {Rates.map((data, index) => {
        if (rateNumber > index) {
          return (
            <StarStyle
              src="/Star.png"
              onClick={() => setRateNumber(index + 1)}
            />
          );
        } else {
          return (
            <>
              <StarStyle
                src="/GrayStar.png"
                onClick={() => setRateNumber(index + 1)}
              />
            </>
          );
        }
      })}
      <p>
        {rateNumber}점 : {Rates[rateNumber - 1]}
      </p>
    </div>
  );
}
