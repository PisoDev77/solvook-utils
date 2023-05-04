import { getOptions } from "../lib/sero";

const STYLE = {
  paddingTop: "4px",
  border: "0 !important",
  borderSpacing: 0,
  borderCollapse: "collapse",
  display: "table-cell",
  verticalAlign: "baseline",
  textIndent: "initial",
};

const MCE =
  "padding-top: 4px; border: 0 !important; border-spacing: 0; border-collapse: collapse; display: table-cell; vertical-align: baseline; text-indent: initial ";

export default function Converted({ optionsStr }) {
  const options = getOptions(optionsStr);

  return (
    <table border={1} className="copy-table">
      <tbody>
        {options.map((item, idx) => (
          <tr key={idx + "rnrn"}>
            <td style={STYLE} data-mce-style={MCE}>
              {item}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
