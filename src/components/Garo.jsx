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

export default function Garo() {
  const arr = ["① a", "② b", "③ c", "④ d", "⑤ e"];

  return (
    <>
      <h1>가로 선택형</h1>
      <table>
        <tbody>
          <tr style={TR}>
            {arr.map((num) => (
              <td data-answer data-q-number={num} style={STYLE} key={num}>
                {num}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <hr></hr>
    </>
  );
}
