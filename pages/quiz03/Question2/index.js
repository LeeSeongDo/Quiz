import axios from "axios";

export default function RestApiTest() {
  let ClickEvent = async () => {
    let getData = await axios.get("https://koreanjson.com/users");
    console.log(getData);
  };

  return (
    <div>
      <button onClick={ClickEvent}>시작</button>
    </div>
  );
}
