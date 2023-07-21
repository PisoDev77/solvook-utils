import "./option.css";

export default function Option({ clsName, width, options, direction }) {
  let num = 0x2460;
  const alpha = ["A", "B", "C", "D", "E", "F"];

  const tableByDirection = {
    vertical: () => {
      const optionsRender = options.map((option, idx) => (
        <tr data-answer="" data-q-number={idx + 1}>
          <td>{String.fromCharCode(num + idx)}</td>
          <td>{option}</td>
        </tr>
      ));
      const colRender = (
        <col
          style={{ width: width + "px" }}
          data-mce-style={`width: ${width}px;`}
        ></col>
      );
      return {
        optionsRender,
        colRender,
      };
    },
    horizontal: () => {
      const optionsRender = (
        <tr>
          {options.map((option, idx) => (
            <td data-answer data-q-number={idx + 1}>
              {String.fromCharCode(num + idx)} {option}
            </td>
          ))}
        </tr>
      );
      const colRender = (
        <col
          style={{ width: width + "%" }}
          data-mce-style={`width: ${width}%;`}
        ></col>
      );
      return {
        optionsRender,
        colRender,
      };
    },
    ABC: () => {
      const optionsRender = (
        <>
          <tr>
            <td></td>
            {options[1].map((_, idx) => (
              <td>( {alpha[idx]} )</td>
            ))}
          </tr>
          {options.map((option, idx) => (
            <tr data-answer="" data-q-number={idx + 1}>
              <td>{String.fromCharCode(num + idx)}</td>
              {option.map((optionItem) => (
                <td>{optionItem}</td>
              ))}
            </tr>
          ))}
        </>
      );
      const colRender = (
        <>
          <col
            style={{ width: "24px" }}
            data-mce-style={`width: ${24}px;`}
          ></col>
          <col
            style={{ width: `calc((100% - 24px) / ${options[1].length})` }}
            data-mce-style={`width: calc((100% - 24px) / ${options[1].length})`}
          ></col>
        </>
      );
      return {
        optionsRender,
        colRender,
      };
    },
    Order: () => {
      const optionsRender = (
        <>
          {options.map((option, idx) => {
            return idx % 2 === 0 ? (
              <tr>
                <td>{String.fromCharCode(num + idx)}</td>
                <td>{option}</td>

                {options[idx + 1] ? (
                  <>
                    <td>{String.fromCharCode(num + idx + 1)}</td>
                    <td>{options[idx + 1]}</td>
                  </>
                ) : (
                  ""
                )}
              </tr>
            ) : null;
          })}
        </>
      );
      const colRender = (
        <>
          <col
            style={{ width: "24px" }}
            data-mce-style={`width: ${24}px;`}
          ></col>

          <col
            style={{ width: `calc((100% - 24px) / 2` }}
            data-mce-style={`width: calc((100% - 24px) / 2`}
          ></col>
          <col
            style={{ width: "24px" }}
            data-mce-style={`width: ${24}px;`}
          ></col>
          <col
            style={{ width: `calc((100% - 24px) / 2` }}
            data-mce-style={`width: calc((100% - 24px) / 2`}
          ></col>
        </>
      );
      return {
        optionsRender,
        colRender,
      };
    },
  };

  const { optionsRender, colRender } = tableByDirection[direction]();

  return (
    // prettier-ignore
    <table className={clsName}>
      <colgroup>
        {colRender}
      </colgroup>
      <tbody>
        {optionsRender}
      </tbody>
    </table>
  );
}
