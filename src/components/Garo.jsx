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

const garos = [
  ["① a", "② b", "③ c", "④ d", "⑤ e"],
  ["1. ①", "2. ②", "3. ③", "4. ④", "5. ⑤"],
];

export default function Garo() {
  const handleCopyGaro = (event) => {
    const { garoidx } = event.target.dataset;

    copyTargetDom(document.querySelector(`table > tbody`).children[+garoidx]);
  };

  return (
    <section className={"garo regular-box"}>
      <h2>가로 선택형</h2>
      <table border={1}>
        <tbody>
          {garos.map((garo, idx) => (
            <tr key={`garoIdx${idx}`} style={TR}>
              {garo.map((num) => (
                <td data-answer data-q-number={num} style={STYLE} key={num}>
                  {num}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
