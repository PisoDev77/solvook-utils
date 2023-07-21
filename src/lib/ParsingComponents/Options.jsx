import Option from "../../components/ParsingTemplate/Option";
import {
  ABCOptions,
  ABOptions,
} from "../../components/ParsingTemplate/Option/Option.stories";

export default class Options {
  constructor(content) {
    this.content = content;
  }

  get seroDOM() {
    const options = this.content.replace(/\n/g, "").split(/[①-⑮➀-➄]/g);
    options.shift();
    if (options.length === 0) return null;
    const wid = 21;

    return (
      <table className="">
        <colgroup>
          <col
            style={{ width: wid + "px" }}
            data-mce-style={`width: ${wid}px;`}
          ></col>
        </colgroup>
        <tbody>
          {options.map((option, idx) => (
            <tr data-answer="" data-q-number={idx + 1}>
              <td>{String.fromCharCode(0x2460 + idx)}</td>
              <td>{option}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  get garoDOM() {
    const options = this.content.replace(/\n/g, "").split(/[①-⑮➀-➄]/g);
    options.shift();

    if (options.length === 0) return null;

    const wid = 100 / options.length;

    return (
      <table className="">
        <colgroup>
          <col
            style={{ width: wid + "%" }}
            data-mce-style={`width: ${wid}%;`}
          ></col>
        </colgroup>
        <tbody>
          <tr>
            {options.map((option, idx) => (
              <td data-answer data-q-number={idx + 1}>
                {String.fromCharCode(0x2460 + idx)} {option}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }

  get ABCDOMByHipen() {
    const options = this.content
      .replace(/\n/g, "")
      .split(/[①-⑮➀-➄]/g)
      .map((i) => i.split(/[-–]/g))
      .map((i) => i.map((j) => j.trim()));
    options.shift();

    return <Option {...ABCOptions.args} options={options} />;
  }

  get ABDOMByHipen() {
    const options = this.content
      .replace(/\n/g, "")
      .split(/[①-⑮➀-➄]/g)
      .map((i) => i.split(/[-–]/g))
      .map((i) => i.map((j) => j.trim()));
    options.shift();

    return <Option {...ABOptions.args} options={options} />;
  }
}
