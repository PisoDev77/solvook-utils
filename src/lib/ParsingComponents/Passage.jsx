export default class Passage {
  constructor(content) {
    this.content = content;
  }

  get contentDOM() {
    let tmp = "";
    if (typeof this.content === "string") {
      tmp = this.content
        .replace(/\n/g, " ")
        .split(/(\[br\]|\[ul *\][.,!? ])/g)
        .map((i) =>
          i === "[br]" ? (
            <br />
          ) : i.includes("[ul") ? (
            <span
              style={{ textDecoration: "underline" }}
              data-mce-style="text-decoration: underline;"
            >
              {i.replace("[ul", "").replace("]", "")}
            </span>
          ) : (
            i.split(/(♠\s*\b\w+\b)/g).map((i) => {
              return i.includes("♠") ? (
                <span
                  style={{ textDecoration: "underline" }}
                  data-mce-style="text-decoration: underline;"
                >
                  <strong>{i.replace("♠", "")}</strong>
                </span>
              ) : (
                i
              );
            })
          )
        );
    } else {
      tmp = this.content;
    }

    return this.content !== null ? <p className="passage-box">{tmp}</p> : null;
  }

  get OrderTMP() {
    return (
      <p className="passage-box">
        {this.content.map((i) => {
          const regex = /(\([B-Z]\))/g;

          if (typeof i === "string" && regex.test(i)) {
            const tmp = i.split(regex);
            return [
              tmp[0],
              <>
                <br />
                <br />
              </>,
              tmp[1] + " ",
              tmp[2],
            ];
          }

          return i;
        })}
      </p>
    );
  }

  get OrderDOM() {
    const tmp = this.content.split(/\(\w\)/g);

    return (
      <>
        <p className="passage-box">{tmp.shift()}</p>
        <p className="passage-box">
          {tmp.map((i, idx) => (
            <>
              ({String.fromCharCode(65 + idx)}) {i.trim()}
              <br />
              {idx < tmp.length - 1 ? <br /> : ""}
            </>
          ))}
        </p>
      </>
    );
  }

  get getLineDOM() {
    const tmp = this.content
      .replace(/\n/g, " ")
      .replace(/\,[①-⑮]/, (match) => ", " + match.replace(",", ""))
      .replace(/\.[①-⑮]/, (match) => ". " + match.replace(",", ""))
      .split(/([①-⑮][\w\s]+[.?!,①-⑮])/g);
    const pattern = /[①-⑮]/g;
    let cnt = 0;
    return (
      <p className="passage-box">
        {tmp.map((i) => {
          return (
            <>
              {pattern.test(i) ? (
                <>
                  {String.fromCharCode(0x2460 + cnt++)}&nbsp;
                  <span
                    style={{ textDecoration: "underline" }}
                    data-mce-style="text-decoration: underline;"
                  >
                    {i.replace(/[①-⑮]/, "").trim()}
                  </span>
                </>
              ) : (
                i
              )}
            </>
          );
        })}
      </p>
    );
  }
}
