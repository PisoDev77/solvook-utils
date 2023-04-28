import { useState } from "react";

export default function ABC() {
  const [str, setStr] = useState([]);

  const handleConvert = (event) => {
    const { value } = event.target;

    if (value[0] === '"' && value[value.length - 1])
      console.log(value.substring(1, value.length - 1));

    const arr = (
      value[0] === '"' && value[value.length - 1]
        ? value.substring(1, value.length - 1)
        : value
    )
      .split(/\n/)
      .map((item) => item.replace(/^./, "").trim());

    console.log(arr.map((i) => i.split(" ")));
  };
  return (
    <>
      <h1>객관식 A,B,C</h1>
      <textarea value={str} onChange={handleConvert} cols="50" rows="20">
        {str}
      </textarea>
    </>
  );
}
