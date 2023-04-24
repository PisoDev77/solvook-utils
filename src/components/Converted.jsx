import { useRef } from "react";

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

const copytoClipboard = (text) => {
  const input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
};

export default function Converted({ str }) {
  const myRef = useRef(null);

  const handleCopyOne = (event) => {
    copytoClipboard(event.target.dataset.value);
    console.log("a");
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <table className="copy-table">
          <tbody>
            {str.map((item, idx) => (
              <tr key={idx + "rnrn"}>
                <td style={STYLE} data-mce-style={MCE}>
                  {item}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <tbody ref={myRef}>
            {str.map((item, idx) => (
              <tr key={idx + "rnrn"}>
                <td
                  onClick={handleCopyOne}
                  data-value={item}
                  style={{
                    border: "solid white 2px",
                    borderRadius: "16px",
                    padding: "4px",
                  }}
                >
                  복사
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
