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
        <h4 className="warns">꼭 서식 없이 붙여넣기 하세요</h4>
        <h5>
          <kbd>
            windows | <kbd className="key">ctrl</kbd> +{" "}
            <kbd className="key">shfit</kbd> + <kbd>v</kbd>
          </kbd>
          <br />
          <kbd>
            mac | <kbd className="key">command</kbd> +{" "}
            <kbd className="key">shfit</kbd> + <kbd>v</kbd>
          </kbd>
        </h5>
        <hr />
        <pre onClick={(e) => copyTargetDom(e.target)}>
          {numbering
            .split("\n")
            .map((i, idx) => {
              const k = idx + startNum;
              // if (k === 1) return `①: ${i}`;
              // if (k === 2) return `②: ${i}`;
              // if (k === 3) return `③: ${i}`;
              // if (k === 4) return `④: ${i}`;
              // if (k === 5) return `⑤: ${i}`;
              return `${idx + startNum}) ${i}`;
            })
            .join("   ")}
        </pre>
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
