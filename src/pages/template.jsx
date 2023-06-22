import "./page.css";

import { useState } from "react";

import { getOptions } from "../lib/sero";

import StrongUnderline from "../lib/StrongUnderline";

import {
  NormalParsing,
  PutParsing,
} from "../components/Containers/ParsingContainer/ParsingContainer.stories";
import { ParsingContainer } from "../components/Containers";

import HelpBtn from "../components/common/HelpBtn";

// prettier-ignore
const contentTypes = [
  { label: "기본" },
  { label: (<> 00)&nbsp;<strong>[ wordA / wordB ]</strong>&nbsp;</>) },
  { label: (<> ① <strong style={{ textDecoration: "underline" }}>wordA</strong> </>)} 
];

export default function TemplateP() {
  const [datas, setDatas] = useState({});
  const [radio, setRadio] = useState("seroform");
  const [toggle, setToggle] = useState(0);

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
              <p className="passage-box">&nbsp;{datas.contenta}</p>
            ) : (
              ""
            )}
            {datas.content ? (
              <p className="passage-box">&nbsp;{datas.content}</p>
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

  const handleSero = (event) => {
    const formValues = Object.fromEntries(new FormData(event.currentTarget));

    const contentInstance = new StrongUnderline(formValues.content);
    const contentAInstance = new StrongUnderline(formValues.contenta);

    const contents = {
      get 0() {
        return {
          content: contentInstance.boldSqure,
          contenta: contentAInstance.boldSqure,
        };
      },
      get 1() {
        return {
          content: contentInstance.boldSqureWithNumber,
          contenta: contentAInstance.boldSqureWithNumber,
        };
      },
      get 2() {
        return {
          content: contentInstance.boldWithLine,
          contenta: contentAInstance.boldWithLine,
        };
      },
    };

    const bogis = ["①", "②", "③", "④", "⑤"];
    const seroform =
      formValues.seroform === ""
        ? false
        : getOptions(formValues.seroform).map((item, idx) => (
            <>
              <tr data-answer="" data-q-number={idx + 1}>
                <td>{bogis[idx]}</td>
                <td>{item}</td>
              </tr>
            </>
          ));
    console.log(contents[+toggle]);
    setDatas({
      ...formValues,
      ...contents[+toggle],
      seroform,
    });
  };

  return (
    <article className="template">
      <HelpBtn idx={"가로모음"} caption="가로 모음" />
      <hr />
      <h4>본문 출력 유형</h4>

      {contentTypes.map(({ label }, idx) =>
        // prettier-ignore
        <>
          <label htmlFor="default-radio">{label}</label>
          <input 
            type="radio" name="toggle" value={idx}
            onChange={(e) => { setToggle(e.target.value); }}/>
        </>
      )}

      <hr />
      <article className={"normal-parsing"}>{forms[radio](datas)}</article>
    </article>
  );
}
