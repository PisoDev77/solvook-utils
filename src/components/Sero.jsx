import { useState } from "react";
import { copyTargetDom } from "../lib/copy";

import "../styles/Sero.css";

import Converted from "./Converted";

export default function Sero() {
  const [optionsStr, setOptionsStr] = useState("");

  const handleConvert = (event) => {
    const { value: optionsStr } = event.target;
    setOptionsStr(optionsStr);
  };

  const handleCopySero = () => {
    copyTargetDom(document.querySelector(".copy-table"));
  };

  return (
    <section className="sero-container">
      <h2>세로 선택형</h2>
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
