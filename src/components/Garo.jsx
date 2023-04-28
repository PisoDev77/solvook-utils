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
  const arr2 = ["1. ①", "2. ②", "3. ③", "4. ④", "5. ⑤"];

  return (
    <>
      <hr></hr>
      <h1>가로 선택형</h1>
      <table border={1}>
        <tbody>
          <tr style={TR}>
            {arr.map((num) => (
              <td data-answer data-q-number={num} style={STYLE} key={num}>
                {num}
              </td>
            ))}
          </tr>
          <tr style={TR}>
            {arr2.map((num) => (
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
