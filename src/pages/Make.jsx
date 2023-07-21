import { useState } from "react";
import ParsingStringHandler from "../lib/ParsingStringHandler";

export default function Make() {
  const [type, setType] = useState("");
  const [res, setRes] = useState([]);

  const handleRadio = (e) => {
    setType(e.target.value);
  };

  const handle = (e) => {
    const str = e.target.value;
    const convertedStr = new ParsingStringHandler(type, str)
      .ConvertParsingString;
    setRes(convertedStr);
  };

  return (
    <section style={{ padding: "1rem" }}>
      <div onChange={handleRadio}>
        <label>원 숫자 기호</label>
        <input type="radio" name="type" value="circle-number" />
        <br />
        <label>대괄호 굵게</label>
        <input type="radio" name="type" value="square-brackets" />
      </div>

      <hr />
      <h3>{type}</h3>
      <textarea
        onChange={handle}
        style={{ resize: "both", width: "50%", height: "50vh" }}
      ></textarea>
      <div>{res}</div>
    </section>
  );
}
