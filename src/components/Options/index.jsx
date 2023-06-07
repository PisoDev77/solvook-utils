import "./options.css";

import { copyTargetDom } from "../../lib/copy";

export default function Options(props) {
  const { items } = props;
  return (
    <div className="option">
      <table
        className="choice-box number-choice no-text mce-item-table"
        data-mce-selected="1"
      >
        <colgroup>
          <col style={{ width: "20%" }} data-mce-style="width: 20%;"></col>
        </colgroup>
        <tbody>
          <tr>
            {items.map((item, idx) => (
              <td data-answer data-q-number={idx + 1}>
                {item}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <button
        onClick={(e) => {
          copyTargetDom(e.target.previousElementSibling);
        }}
      >
        복사하기
      </button>
    </div>
  );
}
