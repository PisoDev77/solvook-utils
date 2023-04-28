import { useState } from "react";

export default function QueType() {
  const [str, setStr] = useState();
  const [str2, setStr2] = useState();
  const [arr, setArr] = useState([]);
  const handleConvert = (event) => {
    const { value } = event.target;

    const regex = /^(\d+)\t(\d+)$/gm;
    let match;
    const pairs = [];

    while ((match = regex.exec(value)) !== null) {
      pairs.push(parseInt(match[1]) + "번," + parseInt(match[2]));
    }
    setStr(value);
    setArr(pairs);
  };
  const handleTong = (event) => {
    const { value } = event.target;
    const regex = /^(\d+)\t(\d+)$/gm;
    let match;
    let a = "";
    let b = "";

    while ((match = regex.exec(value)) !== null) {
      console.log(match);
      a += match[1] + "번,";
      b += match[2] + ",";
    }
    b.slice(0, -1);
    setArr([a + b.slice(0, -1)]);
  };

  return (
    <>
      <h1>번호,유형</h1>
      <textarea
        value={str}
        onChange={handleConvert}
        cols="30"
        rows="10"
      ></textarea>
      <textarea
        value={str2}
        onChange={handleTong}
        cols={30}
        rows={10}
      ></textarea>
      {arr.length > 0 ? (
        <div>
          {arr.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
