import Helper from ".";

import Options from "../../Options";

const garos = [
  ["①", "②", "③", "④", "⑤", "⑥", "⑦"],
  ["①", "②", "③", "④", "⑤", "⑥"],
  ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"],
  ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨"],
  ["① ⓐ", "② ⓑ", "③ ⓒ", "④ ⓓ", "⑤ ⓔ"],
  ["① ❶", "② ❷", "③ ❸", "④ ❹", "⑤ ❺"],
  ["① A", "② B", "③ C", "④ D", "⑤ E"],
  ["① 1개", "② 2개", "③ 3개", "④ 4개", "⑤ 5개"],
];

export default {
  title: "Containers/Helper",
  component: Helper,
};

export const Garos = {
  args: {
    title: "Garos",
    items: [
      <details className={"garos"}>
        <summary>가로 선택지들</summary>
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
