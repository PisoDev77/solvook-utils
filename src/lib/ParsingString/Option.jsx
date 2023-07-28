export default class Option {
  constructor(type, value) {
    this.value = value;
    this.type = type;
  }

  get getDOM() {
    if (this.type === "sero") return this.#SeroDOM();
    if (this.type === "garo") return this.#GaroDOM();
    if (this.type === "abc") return this.#ABCDOM();
    if (this.type === "essay") return this.#EssayDOM();
  }

  #SeroDOM() {
    const options = this.value
      .replace(/\n/g, "")
      .split(/[①-⑮]/g)
      .filter((i) => i.trim() !== "");
    return (
      <table className="">
        <colgroup>
          <col style={{ width: "21px" }} data-mce-style={`width: 21px;`}></col>
        </colgroup>
        <tbody>
          {options.map((option, idx) => (
            <tr data-answer="" data-q-number={idx + 1}>
              <td>{String.fromCharCode(0x2460 + idx)}</td>
              <td>{option.trim()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  #GaroDOM() {
    const options = this.value
      .replace(/\n/g, "")
      .split(/[①-⑮]/g)
      .filter((i) => i.trim() !== "");

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

  #ABCDOM() {
    const options = this.value
      .replace(/\n/g, "")
      .split(/[①-⑮➀-➄]/g)
      .filter((i) => i.trim() !== "")
      .map((i) => i.split(/[-–]/g))
      .map((i) => i.map((j) => j.trim()));

    const length = options[1].length;
    const loop = new Array(length).fill(0);

    return (
      <table class="choice-box alphabet-choice">
        <colgroup>
          <col style={{ width: "24px" }} data-mce-style={`width: 24px;`} />
          {loop.map(() => (
            <col
              style={{ width: `calc((100% - 24px) / ${length})` }}
              data-mce-style={`width: calc((100% - 24px) / ${length})`}
            />
          ))}
        </colgroup>
        <tbody>
          <tr>
            <td></td>
            {loop.map((_, idx) => (
              <td>( {String.fromCharCode(65 + idx)} )</td>
            ))}
          </tr>
          {options.map((option, idx) => (
            <tr data-answer="" data-q-number={idx + 1}>
              <td>{String.fromCharCode(0x2460 + idx)}</td>
              {option.map((i) => (
                <td>{i}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  #EssayDOM() {
    return (
      <div className="essay-box">
        <p>
          {this.value.trim() === ""
            ? "→ "
            : this.value
                .split(/(\[br\])/g)
                .map((i) => (i === "[br]" ? <br /> : i))}
        </p>
      </div>
    );
  }
}
