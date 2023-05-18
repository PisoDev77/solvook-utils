import { useState } from "react";

import { getOptions } from "../lib/sero";
import { getConnectiveOptions, getOneSpaceOptions } from "../lib/abc";
import { copyTargetDom } from "../lib/copy";

const abcTypes = ["연결어", "공백 한 단어"];

export default function ABC() {
  const [opstionsStr, setOpstionsStr] = useState();
  const [abcType, setAbcType] = useState(0);
  const [arr, setArr] = useState([]);

  const [ordering, setOrdering] = useState("");

  const sortABC = (options) => {
    // 연결어인 경우
    if (abcType === 0) setArr(getConnectiveOptions(options));
    if (abcType === 1) setArr(getOneSpaceOptions(options));
  };

  const handleCopyABC = (event) => {
    copyTargetDom(document.querySelector(".copy-abc"));
  };

  const handleConvert = (event) => {
    const { value: opstionsStr } = event.target;

    const options = getOptions(opstionsStr);

    sortABC(options);

    setOpstionsStr(opstionsStr);
  };

  const handleAbcType = (event) => {
    const { abctype } = event.target.dataset;
    setAbcType(+abctype);
  };

  return (
    <section className={"sero-container"}>
      <h2>객관식 A,B,C</h2>
      <textarea
        className={"tmp"}
        value={ordering}
        rows="3"
        onChange={(event) => {
          setOrdering(event.target.value);
        }}
      ></textarea>
      <pre className={"k2"}>
        {ordering.split(/(\([ABC]\))(.+?)(?=\(\w\)|$)/g)}
      </pre>
      <button
        className={"k3"}
        onClick={(event) => {
          const p = event.target.previousElementSibling;
          const text = p.textContent;
          navigator.clipboard
            .writeText(text)
            .then(() => console.log("클립보드에 복사되었습니다."))
            .catch((err) => console.error("클립보드 복사 실패: ", err));
        }}
      >
        복사
      </button>
      <div className={"mid-div"}>
        {abcTypes.map((type, idx) => (
          <span key={`abcType${idx}`}>
            <input
              type={"radio"}
              value={type}
              name={"abcType"}
              onChange={handleAbcType}
              data-abctype={idx}
            />
            <label>{type}</label>
          </span>
        ))}
      </div>
      <textarea
        className={"sero"}
        value={opstionsStr}
        rows="10"
        onChange={handleConvert}
      ></textarea>
      <table className={"copy-abc"} border={1}>
        <tbody>
          {arr.map((i, idx) => (
            <tr key={`ABCIdx${idx}`}>
              {i.map((tmp) => (
                <td>{tmp}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleCopyABC}>ABC 결과 복사하기</button>
    </section>
  );
}
