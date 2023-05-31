import { useState } from "react";
import { copyTargetDom } from "../lib/copy";

export default function Tmp() {
  const [str, setStr] = useState("");
  const [str2, setStr2] = useState("");
  const [res, setRes] = useState([]);

  const handleTmp = (e) => {
    setStr(e.target.value);
    const val = e.target.value;

    // const n = val.split(/\n/g);
    // const n2 = n.map((i) => i.split(/\d+\)/g));
    // const n3 = n2.map((i) => i[1]);
    const t = val.split(/\d+\./g);
    // const t = val.split(/\n/g);
    // const l = t.map((i) => {
    //   if (i.trim() === "") return;
    //   const pattern = /^([\s\S]*?[.?!])\s*([\s\S]*)$/;
    //   const result = i.match(pattern);
    //   const firstSentence = result[1];
    //   const remainingSentences = result[2];

    //   return [firstSentence, remainingSentences];
    // });

    setRes(t);
    // setRes(l);
  };
  const getN = (num) => {
    if (num === "➄" || num === "⓹") return "⑤";
    if (num === "➃" || num === "⓸") return "④";
    if (num === "➂" || num === "⓷") return "③";
    if (num === "➁" || num === "⓶") return "②";
    if (num === "➀" || num === "⓵") return "①";
    return num;
  };

  const type1 = () => {
    return (
      <div style={{ maxWidth: "550px" }}>
        <ol class="question-box">
          <li>{/* <h3>※ 다음을 읽고, 물음에 답하시오.</h3> */}</li>
        </ol>
        <label>. 으로</label>
        <textarea
          onChange={(e) => {
            setStr(e.target.value);
            setRes(e.target.value.split(/\d+\./g));
          }}
          value={str}
          style={{ resize: "both" }}
        ></textarea>
        <hr />
        <label>) 으로</label>
        <textarea
          onChange={(e) => {
            setStr2(e.target.value);
            setRes(e.target.value.split(/\d+\)/g));
          }}
          value={str2}
          style={{ resize: "both" }}
        ></textarea>
        <hr />
        {res.map((i, idx) => (
          <>
            <div>{i}</div>
            {/* <h4>{idx + 1}번</h4>
            <p>
              <span
                data-sheets-value='{"1":2,"2":"→"}'
                data-sheets-userformat='{"2":448,"9":0,"10":1,"11":3}'
              >
                →
              </span>
            </p>
            <div class="answer-box">
              답 : {i}
              <button
                style={{ fontSize: "12pt" }}
                onClick={(e) => {
                  copyTargetDom(e.target);
                }}
              >
                {getN(i.trim())}
              </button>
            </div> */}
          </>
        ))}
      </div>
    );
  };

  const [res1, setRes1] = useState({});
  const [res2, setRes2] = useState({});
  const type2 = () => {
    return (
      <>
        <h2>텍스트 타입으로 받는다면?</h2>
        <input type="text" />
        {/* <div>{res1}</div> */}
        <h2>텍스트에어리어 타입으로 받는다면?</h2>
        {/* <div>{res2}</div> */}
      </>
    );
  };

  const type3 = () => {
    return (
      <>
        <textarea
          onChange={(e) => {
            const tmp = e.target.value;
            const regex = new RegExp(
              `(${["①", "②", "③", "④", "⑤"].join("|")})(\\s\\S+)`,
              "g"
            );

            const tmp2 = [];
            let match;
            let lastIndex = 0;

            while ((match = regex.exec(tmp)) !== null) {
              const [, p1, p2] = match;
              const index = match.index;

              // 이전 매치와 현재 매치 사이의 문자열을 tmp2 배열에 추가
              tmp2.push(tmp.substring(lastIndex, index));

              // $2를 <태그>로 감싸서 tmp2 배열에 추가
              const ak = (
                <>
                  {p1.trim() + " "}
                  <b>{p2.trim()}</b>
                </>
              );
              tmp2.push(ak);

              // 마지막 인덱스 갱신
              lastIndex = index + match[0].length;
            }

            // 나머지 문자열을 tmp2 배열에 추가
            tmp2.push(tmp.substring(lastIndex));

            const t = tmp.split(/\n/g);
            const t2 = t.map((i) => {
              if (+i === 1) return "①";
              if (+i === 2) return "②";
              if (+i === 3) return "③";
              if (+i === 4) return "④";
              if (+i === 5) return "⑤";
              return i;
            });
            console.log(t2);

            setRes(t2);

            setStr(e.target.value);
          }}
          value={str}
        ></textarea>
        <div onClick={(e) => copyTargetDom(e.target)}>
          {res.map((i) => (
            <div>{i}</div>
          ))}
        </div>
      </>
    );
  };

  const type4 = () => {
    return (
      <table>
        <tbody>
          {res?.map((i) =>
            i !== undefined ? (
              <tr>
                <td>{i[0]}</td>
                <td>{i[1]}</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </table>
    );
  };
  return type1();
}
