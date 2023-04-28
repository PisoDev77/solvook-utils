import { useState } from "react";

export default function Temp() {
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ansRes1, setAnsRes1] = useState("");
  const [ansRes2, setAnsRes2] = useState("");

  const handleAns1 = (event) => {
    const { value } = event.target;
    const tmp = ["①", "②", "③", "④", "⑤"];
    const tmp2 = value.split("\n");
    for (let i = 0; i < 5; i++) {
      tmp[i] = tmp[i] + " " + tmp2[i];
    }
    setAns1(value);
    setAnsRes1(tmp.join("\n"));
  };
  const handleAns2 = (event) => {
    const { value } = event.target;
    const tmp = ["①", "②", "③", "④", "⑤"];
    const tmp2 = value.split("\n");
    for (let i = 0; i < 5; i++) {
      tmp[i] = tmp[i] + " " + tmp2[i];
    }
    setAns2(value);
    setAnsRes2(tmp2.join(" "));
  };

  return (
    <>
      <h3>선지 번호달기</h3>
      <textarea value={ans1} onChange={handleAns1}></textarea>

      <pre>{ansRes1}</pre>

      <hr></hr>
      <h3>한 줄</h3>
      <textarea value={ans2} onChange={handleAns2}></textarea>

      <div>{ansRes2}</div>
    </>
  );
}
