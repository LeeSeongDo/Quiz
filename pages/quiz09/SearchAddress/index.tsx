import React, { useState } from "react";
import { useDaumPostcodePopup, DaumPostcodeEmbed } from "react-daum-postcode";

export default function SearchAddress() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState<String>("");
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setAddress(fullAddress);
    setIsOpen((prev) => !isOpen);

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <div>
      <input type="text" />

      <button onClick={handleComplete}>주소검색</button>
      {isOpen && <DaumPostcodeEmbed onComplete={handleComplete} />}
      {address}
    </div>
  );
}
