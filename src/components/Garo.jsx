import { copyTargetDom } from "../lib/copy";

import "../styles/Garo.css";

const STYLE = {
  border: "0 !important",
  height: "20.8px",
  borderSpacing: 0,
  borderCollapse: "collapse",
  display: "table-cell",
  verticalAlign: "baseline",
  textIndent: "initial",
  wordWrap: "break-word",
};

const TR = {
  border: "0 !important",
  display: "table-row",
  verticalAlign: "baseline",
  borderSpacing: 0,
  borderCollapse: "collapse",
  textIndent: "initial",
  wordWrap: "break-word",
};

const selects = ["①", "②", "③", "④", "⑤"];
const garos = [
  ["①", "②", "③", "④", "⑤", "⑥", "⑦"],
  ["①", "②", "③", "④", "⑤", "⑥"],
  ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"],
  ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨"],
  ["1. ①", "2. ②", "3. ③", "4. ④", "5. ⑤"],
  ["① ⓐ", "② ⓑ", "③ ⓒ", "④ ⓓ", "⑤ ⓔ"],
  ["① ❶", "② ❷", "③ ❸", "④ ❹", "⑤ ❺"],
  ["① A", "② B", "③ C", "④ D", "⑤ E"],
  ["① 1개", "② 2개", "③ 3개", "④ 4개", "⑤ 5개"],
];

export default function Garo() {
  const handleCopyGaro = (event) => {
    const { garoidx } = event.target.dataset;
    const $table = document.querySelector(`.tables`).children[garoidx];
    copyTargetDom($table.firstChild);
  };

  return (
    <section className={"garo regular-box"}>
      <h2>가로 선택형 →</h2>
      <div className={"tmp"}>
        {selects.map((select, idx) => (
          <button
            key={`SELECT${idx}`}
            onClick={(event) => copyTargetDom(event.target.firstChild)}
          >
            {select}
          </button>
        ))}
      </div>
      <div className={"tables"}>
        {garos.map((garo, idx) => (
          <table key={`garoIdx${idx}`} className={`${idx} regular-box`}>
            <tbody>
              <tr style={TR}>
                {garo.map((num) => (
                  <td data-answer data-q-number={num} style={STYLE} key={num}>
                    {num}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        ))}
      </div>
      <div className={"btns"}>
        {garos.map((_, idx) => (
          <button
            key={`btn-${idx}`}
            onClick={handleCopyGaro}
            data-garoidx={idx}
          >
            copy
          </button>
        ))}
      </div>
    </section>
  );
}
