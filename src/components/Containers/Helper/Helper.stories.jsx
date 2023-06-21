import Helper from ".";
import { copyTargetDom } from "../../../lib/copy";

import Options from "../../Options";

const individuals = ["①", "②", "③", "④", "⑤"];
const garos = [
  ["①", "②", "③", "④", "⑤", "⑥", "⑦"],
  ["①", "②", "③", "④", "⑤", "⑥"],
  ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"],
  ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨"],
  ["① ⓐ", "② ⓑ", "③ ⓒ", "④ ⓓ", "⑤ ⓔ"],
  ["① ❶", "② ❷", "③ ❸", "④ ❹", "⑤ ❺"],
  ["① A", "② B", "③ C", "④ D", "⑤ E"],
  ["① 1개", "② 2개", "③ 3개", "④ 4개", "⑤ 5개"],
  ["ⓐ", "ⓑ", "ⓒ", "ⓓ", "ⓔ", "ⓖ", "ⓗ"],
];

export default {
  title: "Containers/Helper",
  component: Helper,
};

export const Garos = {
  args: {
    title: "가로형 선택지 유형들",
    items: [
      <details className={"garos"}>
        <summary>
          {individuals.map((individual) => (
            <button onClick={(e) => copyTargetDom(e.target)}>
              {individual}
            </button>
          ))}
        </summary>
        <ul>
          {garos.map((garo) => (
            <li>
              <Options items={garo} />
            </li>
          ))}
        </ul>
      </details>,
    ],
  },
};
