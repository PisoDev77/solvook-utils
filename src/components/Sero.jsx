import { useState } from "react";

import Converted from "./Converted";

export default function Sero() {
  const [str, setStr] = useState([]);

  const handleConvert = (event) => {
    const { value } = event.target;

    if (value[0] === '"' && value[value.length - 1])
      console.log(value.substring(1, value.length - 1));

    setStr(
      (value[0] === '"' && value[value.length - 1]
        ? value.substring(1, value.length - 1)
        : value
      )
        .split(/\n/)
        .map((item) => item.replace(/^./, "").trim())
    );
  };

  return (
    <>
      <h1>세로 선택형</h1>
      <textarea value={str} onChange={handleConvert} cols="50" rows="20">
        {str}
      </textarea>
      <Converted str={str} />
    </>
  );
}
