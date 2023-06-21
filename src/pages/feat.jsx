import { useState } from "react";
import "./feat.css";
import { getConnectiveOptions, getOneSpaceOptions } from "../lib/abc";
import { getOptions } from "../lib/sero";

import Option from "../components/ParsingTemplate/Option";
import { OrderOptions } from "../components/ParsingTemplate/Option/Option.stories";

/*
29 틀린어법
38 틀린 어위
340 빈칸 추론
*/

function extractUnderlineTags(str) {
  const regex = /(<underline>[^<]*<\/underline>)|([^<]+)/g;
  const matches = str.match(regex);
  const result = [];

  for (let i = 0; i < matches.length; i++) {
    if (matches[i].startsWith("<underline>")) {
      let tmp = matches[i].replace("<underline>", "");
      tmp = tmp.replace("</underline>", "");
      result.push(
        <>
          {" "}
          <span
            style={{ textDecoration: "underline" }}
            data-mce-style="text-decoration: underline;"
          >
            {tmp}
          </span>{" "}
        </>
      );
    } else {
      result.push(matches[i].trim());
    }
  }

  return result;
}
function extractStrongUnderlineTags(str) {
  const regex = /(<strong>[^<]*<\/strong>)|([^<]+)/g;
  const matches = str.match(regex);
  const result = [];

  for (let i = 0; i < matches.length; i++) {
    if (matches[i].startsWith("<strong>")) {
      let tmp = matches[i].replace("<strong>", "");
      tmp = tmp.replace("</strong>", "");
      result.push(
        <>
          {" "}
          <span
            style={{ textDecoration: "underline" }}
            data-mce-style="text-decoration: underline;"
          >
            <strong>{tmp}</strong>
          </span>{" "}
        </>
      );
    } else {
      result.push(matches[i].trim());
    }
  }

  return result;
}
function extractStrong(str) {
  const regex = /(<strong>[^<]*<\/strong>)|([^<]+)/g;
  const matches = str.match(regex);
  const result = [];

  for (let i = 0; i < matches.length; i++) {
    console.log(matches[i]);
    if (matches[i].startsWith("<strong>")) {
      let tmp = matches[i].replace("<strong>", "");
      tmp = tmp.replace("</strong>", "");
      const isUn = matches[i].includes("(un)");
      tmp = tmp.replace("(un)", "");
      result.push(
        <>
          {" "}
          {isUn ? (
            <>
              <span
                style={{ textDecoration: "underline" }}
                data-mce-style="text-decoration: underline;"
              >
                <strong>{tmp}</strong>
              </span>{" "}
            </>
          ) : (
            <>
              <strong>{tmp}</strong>{" "}
            </>
          )}
        </>
      );
    } else {
      result.push(matches[i].trim());
    }
  }

  return result;
}
function underlineQuestion(questionStr) {
  let replacedStr = questionStr.replace(
    /않는|없는|어색한|틀린|않은|아닌|두 개\w|세 개|2개/,
    (match, group) => `<underline>${match}</underline>`
  );
  replacedStr = replacedStr.replace(
    "관계없는",
    `관계<underline>없는</underline>`
  );
  replacedStr = replacedStr.replace(
    /\d+\.[+A-Z+가-힣+]/,
    (match) => `${match.replace(".", ". ")}`
  );
  replacedStr = replacedStr.replace(" ?", "?");
  replacedStr = replacedStr.replace(" .", ".");
  replacedStr = replacedStr.replace(/것 은|것\n은/, "것은");

  return extractUnderlineTags(replacedStr);
}
function strongUnderlinePassage(str) {
  const regex = /([①-⑮ⓐ-ⓩ])\s*(\b\w+\b)/g;
  const modifiedString = str.replace(regex, `$1 <strong>$2</strong>`);
  return extractStrongUnderlineTags(modifiedString);
}
function makeSero(str) {
  console.log(str);
  const arr = str.split(/[①-⑮]/g);
  arr.shift();
  let num = 0x2460;
  return (
    <table
      className="choice-box number-choice mce-item-table"
      data-mce-selected="1"
    >
      <colgroup>
        <col style={{ width: "21px" }} data-mce-style="width: 21px;"></col>
      </colgroup>
      <tbody>
        {arr.map((i, idx) => (
          <tr data-answer="" data-q-number={idx + 1}>
            <td>{String.fromCharCode(num + idx)}</td>
            <td>{i}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function makeGaro(str) {
  const items = str.split(/[①-⑮]/);
  items.shift();
  console.log(items);
  const wid = 100 / items.length;
  let num = 0x2460;
  return (
    <table
      className="choice-box number-choice no-text mce-item-table"
      data-mce-selected="1"
    >
      <colgroup>
        <col
          style={{ width: wid + "%" }}
          data-mce-style={`width: ${wid}%;`}
        ></col>
      </colgroup>
      <tbody>
        <tr>
          {items.map((item, idx) => (
            <td data-answer data-q-number={idx + 1}>
              {String.fromCharCode(num + idx)} {item}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
function makeABC(arr) {
  arr.shift();
  // console.log(arr);
  const alpha = ["A", "B", "C", "D", "E", "F"];
  let num = 0x2460;
  return (
    <table className="choice-box alphabet-choice">
      <colgroup>
        <col style={{ width: "21px" }} data-mce-style="width: 21px;"></col>
      </colgroup>
      <tbody>
        <tr>
          <td></td>
          {arr[1].map((_, idx) => (
            <td>( {alpha[idx]} )</td>
          ))}
        </tr>
        {arr.map((i, idx) => (
          <tr data-answer="" data-q-number={idx + 1}>
            <td>{String.fromCharCode(num + idx)}</td>
            {i.map((i_i) => (
              <td>{i_i}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Feat() {
  const [type, setType] = useState(0);
  const [taStr, setTaStr] = useState("");
  const [taAnswer, setTaAnswer] = useState("");

  const [answers, setAnswers] = useState([]);
  const [res, setRes] = useState([]);

  const templates = {
    11: (str, ans) => {
      const collections = str.replace("\n", "").split(/11+\.\)/g);
      collections.shift();
      return collections.map((collection, idx) => {
        const [ques, tmp] = collection.split("{add}");
        const [given, tmp2] = tmp.split("{con}");
        const [con, opt] = tmp2.split("{opt}");
        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">{given}</p>,
          <p className="passage-box">{con}</p>,
          makeSero(opt),
          <div className="answer-box">답 : {answers[ans]}</div>,
        ];
      });
    },
    110: (str, ans) => {
      const collections = str.replace("\n", "").split(/110+\.\)/g);
      collections.shift();
      return collections.map((collection, idx) => {
        const [ques, tmp] = collection.split("{add}");
        const [given, con] = tmp.split("{con}");
        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">{given}</p>,
          <p className="passage-box">{con}</p>,
          <div class="essay-box">
            <p>➝&nbsp;</p>
          </div>,
          <div className="answer-box">답 : {answers[ans]}</div>,
        ];
      });
    },
    20: (str, ans) => {
      const collections = str.replace("\n", "").split(/20+\.\)/g);
      collections.shift();
      return collections.map((collection, idx) => {
        const [ques, con] = collection.split("{con}");
        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">&nbsp;{con}</p>,
          <div className="answer-box">답 : {answers[ans]}</div>,
        ];
      });
    },
    22: (str, ans) => {
      const collections = str.replace("\n", "").split(/22+\.\)/g);
      collections.shift();
      return collections.map((collection, idx) => {
        const [ques, con] = collection.split("{con}");
        let cnt = 1;
        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">
            &nbsp;
            {extractStrong(
              con.replace(/\[(\[[^\]]*\]|[^\[\]]*)\]/g, (match, group, idx) => {
                return `${cnt++}) <strong>${match
                  .replace("[", "[ ")
                  .replace("]", " ]")
                  .replace(" /", "/")
                  .replace("/ ", "/")
                  .replace("/", " / ")}</strong>`;
              })
            )}
          </p>,
          <div className="answer-box">
            답 :&nbsp;
            {answers[ans]
              .split(/\[/g)
              .slice(1)
              .map((i, idx) => (
                <>
                  {idx + 1}) {i.replace("]", "")}&nbsp;&nbsp;&nbsp;
                </>
              ))}
          </div>,
        ];
      });
    },
    29: (str, ans) => {
      const collections = str.replace("\n", "").split(/29+\.\)/g);
      collections.shift();
      return collections.map((collection, idx) => {
        const [ques, p] = collection.split("{b}");
        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">&nbsp;{strongUnderlinePassage(p)}</p>,
          <div className="answer-box">답 : {answers[ans]}</div>,
        ];
      });
    },
    30: (str, ans) => {
      const collections = str.replace("\n", "").split(/30+\.\)/g);
      collections.shift();
      return collections.map((collection, idx) => {
        const [ques, tmp] = collection.split("{b}");
        const [p, sero] = tmp.split("{c}");
        console.log(makeSero(sero));
        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">&nbsp;{strongUnderlinePassage(p)}</p>,
          makeABC(getConnectiveOptions(getOptions(sero))),
          <div className="answer-box">답 : {answers[ans]}</div>,
        ];
      });
    },
    33: (str, ans) => {
      const collections = str.replace("\n", "").split(/33+\.\)/g);
      collections.shift();
      return collections.map((collection, idx) => {
        const [ques, tmp] = collection.split("{b}");
        const [p, sero] = tmp.split("{c}");

        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">&nbsp;{strongUnderlinePassage(p)}</p>,
          makeSero(sero),
          <div className="answer-box">답 : {answers[ans]}</div>,
        ];
      });
    },
    36: (str, ans) => {
      const collections = str.replace("\n", "").split(/36+\.\)/g);
      collections.shift();
      return collections.map((collection, idx) => {
        const [ques, tmp] = collection.split("{add}");
        const [add, con] = tmp.split("{con}");

        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">{add}</p>,
          <p className="passage-box">&nbsp;{con}</p>,
          <div className="answer-box">답 : {answers[ans]}</div>,
        ];
      });
    },
    38: (str, ans) => {
      const collections = str.replace("\n", "").split(/38+\.\)/g);
      collections.shift();

      return collections.map((collection, idx) => {
        const [ques, p] = collection.split("{b}");
        return [
          <ol className="question-box">
            <li>{underlineQuestion(ques)}</li>
          </ol>,
          <p className="passage-box">&nbsp;{strongUnderlinePassage(p)}</p>,
          <div className="answer-box">답 : {answers[ans]}</div>,
        ];
      });
    },
    100: (str, ans) => {
      const collections = str.replace("\n", "").split(/100+\.\)/g);
      collections.shift();

      return collections.map((collection, idx) => {
        const [_, tmp] = collection.split("{con}");
        const [con, subques] = tmp.split("{b}");
        const subquesAll = subques.split("{sub}");
        subquesAll.shift();

        const step1 = subquesAll.map((subques) => {
          const [subq, sero] = subques.split("{sero}");
          return { subq, sero };
        });

        const step2 = step1.map(({ subq, sero = null }, idx) => (
          <>
            <ol class="question-box sub-question">
              <li>{underlineQuestion(subq)}</li>
            </ol>
            {sero !== null
              ? sero.includes("{AB}")
                ? makeABC(
                    sero.includes("{one}")
                      ? getOneSpaceOptions(getOptions(sero))
                      : getConnectiveOptions(getOptions(sero))
                  )
                : sero.includes("{garo}")
                ? makeGaro(sero)
                : makeSero(sero)
              : ""}
            <div className="answer-box">답 : {answers[idx]}</div>
          </>
        ));

        return [
          <ol className="question-box">
            <li>※ 다음 글을 읽고 물음에 답하시오.</li>
          </ol>,
          <p className="passage-box">&nbsp;{con}</p>,
          ...step2,
        ];
      });
    },
    101: (str, ans) => {
      const collections = str.replace("\n", "").split(/101+\.\)/g);
      collections.shift();

      return collections.map((collection, idx) => {
        const [_, tmp] = collection.split("{con}");
        const [con, subs] = tmp.split("{subs}");
        const subquess = subs
          .split(/\d+\)/g)
          .map((i) => i.replace("[서술형]", "").replace(/\n/g, ""))
          .filter((i) => i.trim() !== "");
        console.log(subquess);

        return [
          <ol className="question-box">
            <li>※ 다음 글을 읽고 물음에 답하시오.</li>
          </ol>,
          <p className="passage-box">
            &nbsp;
            {extractStrong(
              con
                .replace(/\[(\[[^\]]*\]|[^\[\]]*)\]/g, (match, group) => {
                  return `<strong>${match
                    .replace("[", "[ ")
                    .replace("]", " ]")
                    .replace(" /", "/")
                    .replace("/ ", "/")
                    .replace("/", " / ")}</strong>`;
                })
                .replace(/(\([A-Z]\))(\b\w+\b)/g, `$1 <strong>$2(un)</strong>`)
            )}
          </p>,
          subquess.map((subq, idx) => (
            <>
              <ol class="question-box sub-question">
                <li>{underlineQuestion(subq)}</li>
              </ol>
              <div class="essay-box">
                <p>➝&nbsp;</p>
              </div>
              <div className="answer-box">답 : {answers[ans + idx]}</div>
            </>
          )),
        ];
      });

      // return collections.map((collection, idx) => {

      //   const step2 = subquesAll.map((subq, idx) => (
      //     <>
      //       <ol class="question-box sub-question">
      //         <li>{underlineQuestion(subq)}</li>
      //       </ol>
      //       {sero !== null
      //         ? sero.includes("{AB}")
      //           ? makeABC(
      //               sero.includes("{one}")
      //                 ? getOneSpaceOptions(getOptions(sero))
      //                 : getConnectiveOptions(getOptions(sero))
      //             )
      //           : sero.includes("{garo}")
      //           ? makeGaro(sero)
      //           : makeSero(sero)
      //         : ""}
      //       <div className="answer-box">답 : {answers[idx]}</div>
      //     </>
      //   ));

      //   return [
      //     <ol className="question-box">
      //       <li>※ 다음 글을 읽고 물음에 답하시오.</li>
      //     </ol>,
      //     <p className="passage-box">&nbsp;{con}</p>,
      //     ...step2,
      //   ];
      // });
    },
  };
  const types = {
    0: () => (
      <>
        <h2>와츄노?</h2>,
        <textarea
          placeholder="정형화한 문자열 넣자"
          style={{ resize: "both" }}
          name="taStr"
          value={taStr}
          onChange={(e) => {
            const str = e.target.value;
            const collections = str.split(/(\d+\.\))/g);

            const res = [];
            let ans = 0;
            for (let i = 0; i < collections.length; i += 2) {
              if (i < collections.length - 1) {
                const no = collections[i + 1].match(/\d+/)[0];
                res.push(
                  templates[no](collections[i + 1] + collections[i + 2], ans++)
                );
              }
            }
            setRes(res);
            setTaStr(e.target.value);
          }}
        />
        <textarea
          placeholder="답지를 먼저 넣자"
          style={{ resize: "both" }}
          name="taAnswer"
          value={taAnswer}
          onChange={(e) => {
            let str = e.target.value;
            setTaAnswer(str);
            const answers = str.split(/\d+\)/g);
            answers.shift();
            setAnswers(answers);
          }}
        />
      </>
    ),
  };

  return (
    <article className={"feat"}>
      <nav className={"feat-type"}>
        <div className="regular-box">
          <label htmlFor="">틀린 어법</label>
          <input
            name="cooler"
            type="radio"
            value={29}
            onChange={(e) => {
              setType(+e.target.value);
            }}
          />
        </div>
        <div className="regular-box">
          <label htmlFor="">틀린 어휘</label>
          <input
            name="cooler"
            type="radio"
            value={38}
            onChange={(e) => {
              setType(+e.target.value);
            }}
          />
        </div>
        <div className="regular-box">
          <label htmlFor="">빈칸 추론</label>
          <input
            name="cooler"
            type="radio"
            value={340}
            onChange={(e) => {
              setType(+e.target.value);
            }}
          />
        </div>
      </nav>
      <section>{types[type]()}</section>
      <section>{res}</section>
    </article>
  );
}
