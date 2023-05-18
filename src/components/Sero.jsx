import { useState } from "react";
import { copyTargetDom } from "../lib/copy";

import "../styles/Sero.css";

import Converted from "./Converted";

export default function Sero() {
  const [optionsStr, setOptionsStr] = useState("");

  const [numbering, setNumbering] = useState("");
  const [startNum, setStartNum] = useState(0);

  const handleConvert = (event) => {
    const { value: optionsStr } = event.target;
    setOptionsStr(optionsStr);
  };

  const handleNumbering = (event) => {
    const { value: numbering } = event.target;
    setNumbering(numbering);
  };

  const handleCopySero = () => {
    copyTargetDom(document.querySelector(".copy-table"));
  };

  return (
    <section className="sero-container">
      <h2>세로 선택형</h2>
      <textarea
        className={"tmp"}
        value={numbering}
        onChange={handleNumbering}
        rows="3"
      ></textarea>
      <div className={"k2"}>
        <input
          type="number"
          value={startNum}
          onChange={(event) => setStartNum(+event.target.value)}
        />
        {numbering
          .split("\n")
          .map((i, idx) => `${idx + startNum}) ${i}`)
          .join("  ")}
      </div>

      <button onClick={handleCopySero}>세로 선지 결과 복사하기</button>
      <textarea
        className={"sero"}
        value={optionsStr}
        onChange={handleConvert}
        rows="10"
      ></textarea>

      <Converted optionsStr={optionsStr} />
    </section>
  );
}
