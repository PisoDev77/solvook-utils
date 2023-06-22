import { useState } from "react";

import "../styles/SubAnswer.css";

import { Question } from "../lib/ParsingComponents";

export default function SubAnswer() {
  const [str, setStr] = useState("");
  const [res, setRes] = useState([]);

  const [bool, setBool] = useState("");

  const tmpFunc = (val) => {
    console.log(typeof val);
    switch (+val) {
      case 1:
        return "①";
      case 2:
        return "②";
      case 3:
        return "③";
      case 4:
        return "④";
      case 5:
        return "⑤";
      default:
        return val;
    }
  };

  const handleStr = (event) => {
    const tmp = event.target.value.split(/\n|\t/);
    setStr(event.target.value);

    const sub = [];
    const ans = [];

    tmp.forEach((item, index) => {
      if (index % 2 === 0) sub.push(item);
      else ans.push(tmpFunc(item));
    });

    const t = sub.map((item, index) => {
      return (
        <>
          {new Question(item).questionDOM}
          {bool !== "" ? (
            <div class="essay-box">
              <p>{bool}</p>
            </div>
          ) : (
            ""
          )}
          <div className="answer-box">답 :&nbsp;{ans[index]}</div>
        </>
      );
    });
    setRes(t);
  };

  const handleBool = (event) => {
    setBool(event.target.value);
  };

  return (
    <section className={"sub-answer"}>
      <h2>통합 문제 답과 서브</h2>
      <input type="text" value={bool} onChange={handleBool} />
      <textarea rows={10} value={str} onChange={handleStr}></textarea>
      <div className={"result"}>{res}</div>
    </section>
  );
}
