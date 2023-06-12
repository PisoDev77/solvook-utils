import { useState } from "react";

import { getOptions } from "../lib/sero";

import {
  NormalParsing,
  PutParsing,
} from "../components/Containers/ParsingContainer/ParsingContainer.stories";
import { ParsingContainer } from "../components/Containers";

import HelpBtn from "../components/common/HelpBtn";

export default function TemplateP() {
  const [datas, setDatas] = useState({});
  const [radio, setRadio] = useState("seroform");
  const forms = {
    seroform: (datas) => {
      return (
        <>
          <ParsingContainer {...NormalParsing.args} onChange={handleSero} />
          <div>
            <ol className="question-box">
              <li>{datas.question}</li>
            </ol>
            {datas.contenta ? (
              <p className="passage-box">{datas.contenta}</p>
            ) : (
              ""
            )}
            {datas.content ? (
              <p className="passage-box">{datas.content}</p>
            ) : (
              ""
            )}
            {datas.essay ? (
              <div class="essay-box">
                <p>{datas.essay}</p>
              </div>
            ) : (
              ""
            )}
            {datas.seroform ? (
              <table className="choice-box number-choice mce-item-table">
                <colgroup>
                  <col
                    style={{ width: "21px" }}
                    data-mce-style="width: 21px;"
                  />
                  <col />
                </colgroup>
                <tbody>{datas.seroform}</tbody>
              </table>
            ) : (
              ""
            )}

            {/* <div class="essay-box">
              <p>→ _____________________</p>
            </div> */}
            <div className="answer-box">답 : {datas.answer}</div>
          </div>
        </>
      );
    },
    putform: (datas) => (
      <>
        <ParsingContainer {...PutParsing.args} />
      </>
    ),
  };

  function wrapNextWordWithStrongTag(string) {
    const regex = /([①-⑮])\s*(\b\w+\b)/g;
    const modifiedString = string.replace(regex, `$1 <strong>$2</strong>`);
    return modifiedString;
  }
  function extractStringAndStrongTags(str) {
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
  const handleSero = (event) => {
    const tmp = Object.fromEntries(new FormData(event.currentTarget));
    let content = tmp.content
      .replace("➀", "①")
      .replace("➁", "②")
      .replace("➂", "③")
      .replace("➃", "④")
      .replace("➄", "⑤");

    let contenta = tmp.contenta
      .replace("➀", "①")
      .replace("➁", "②")
      .replace("➂", "③")
      .replace("➃", "④")
      .replace("➄", "⑤");

    if (+toggle === 0 && tmp.content !== "") {
      let cnt = 1;
      const replacedText1 = content.replace(
        /\[(\[[^\]]*\]|[^\[\]]*)\]/g,
        (match, group) => {
          return `<strong>${match.replace(" /", "/")}</strong>`;
        }
      );

      content = extractStringAndStrongTags(replacedText1);
    }
    if (+toggle === 0 && tmp.contenta !== "") {
      let cnt = 1;
      const replacedText1 = contenta.replace(
        /\[(\[[^\]]*\]|[^\[\]]*)\]/g,
        (match, group) => {
          return `<strong>${match.replace(" /", "/")}</strong>`;
        }
      );

      contenta = extractStringAndStrongTags(replacedText1);
    }

    if (+toggle === 1 && tmp.content !== "") {
      let cnt = 1;
      const replacedText1 = content.replace(
        /\[(\[[^\]]*\]|[^\[\]]*)\]/g,
        (match, group) => {
          console.log(match);
          return `${cnt++}) <strong>${match
            .replace(" /", "/")
            .replace("/ ", "/")
            .replace("/ ", " / ")}</strong>`;
        }
      );

      content = extractStringAndStrongTags(replacedText1);
    }
    if (+toggle === 1 && tmp.contenta !== "") {
      let cnt = 1;

      const replacedText2 = contenta.replace(
        /\[(\[[^\]]*\]|[^\[\]]*)\]/g,
        (match, group) => {
          console.log(match);
          return `${cnt++}) <strong>${match
            .replace("]", "")
            .replace("[", "")
            .replace(" /", "/")}</strong>`;
        }
      );
      contenta = extractStringAndStrongTags(replacedText2);
    }

    if (+toggle === 2 && tmp.content !== "") {
      content = extractStringAndStrongTags(wrapNextWordWithStrongTag(content));
    }
    if (+toggle === 2 && tmp.contenta !== "") {
      contenta = extractStringAndStrongTags(
        wrapNextWordWithStrongTag(contenta)
      );
    }

    const bogis = ["①", "②", "③", "④", "⑤"];
    const seroform =
      tmp.seroform === ""
        ? false
        : getOptions(tmp.seroform).map((item, idx) => (
            <>
              <tr data-answer="" data-q-number={idx + 1}>
                <td>{bogis[idx]}</td>
                <td>{item}</td>
              </tr>
            </>
          ));

    setDatas({
      ...tmp,
      content,
      contenta,
      seroform,
    });
    // setDatas({ ...tmp });
  };

  const handlePut = (event) => {};

  const handleRadio = (event) => {
    setRadio(event.target.value);
  };

  const [toggle, setToggle] = useState(0);
  return (
    <>
      <HelpBtn idx={"질문세트"} caption="질문 세트" />
      <HelpBtn idx={"가로세트"} caption="가로 세트" />
      <hr />
      <label htmlFor="">기본</label>
      <input
        type="radio"
        name="toggle"
        value={0}
        onChange={(e) => {
          setToggle(e.target.value);
        }}
      />
      <label htmlFor="">
        {" "}
        {`00) `}
        <strong>[ wordA / wordB ]</strong>{" "}
      </label>
      <input
        type="radio"
        name="toggle"
        value={1}
        onChange={(e) => {
          setToggle(e.target.value);
        }}
      />
      <label htmlFor="">
        {" "}
        ① <strong style={{ textDecoration: "underline" }}>wordA</strong>
      </label>
      <input
        type="radio"
        name="toggle"
        value={2}
        onChange={(e) => {
          setToggle(e.target.value);
        }}
      />
      <article className={"normal-parsing"}>
        {/* <nav>
        <label>객관식 5지선다</label>
        <input
          type="radio"
          value={"seroform"}
          name="radio"
          checked
          onChange={handleRadio}
        />
        <label>순서 5지선다</label>
        <input
          type="radio"
          value={"putform"}
          name="radio"
          onChange={handleRadio}
        />
      </nav> */}

        {forms[radio](datas)}
        {/* <ParsingContainer {...Tmpk.args} /> */}
      </article>
    </>
  );
}
