import { useState } from "react";

import { getOptions } from "../lib/sero";
import { getConnectiveOptions, getOneSpaceOptions } from "../lib/abc";
import { copyTargetDom } from "../lib/copy";

const abcTypes = ["연결어", "공백 한 단어"];

export default function ABC() {
  const [opstionsStr, setOpstionsStr] = useState();
  const [abcType, setAbcType] = useState(0);
  const [arr, setArr] = useState([]);

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
