import { useState } from "react";

export default function ABC() {
  const [str, setStr] = useState([]);

  const handleConvert = (event) => {
    const { value } = event.target;
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
