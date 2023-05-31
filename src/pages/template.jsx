import { useState } from "react";

import { getOptions } from "../lib/sero";

import {
  NormalParsing,
  PutParsing,
} from "../components/Containers/ParsingContainer/ParsingContainer.stories";
import { ParsingContainer } from "../components/Containers";

export default function TemplateP() {
  const [datas, setDatas] = useState({});
  const [radio, setRadio] = useState("seroform");
  const forms = {
    seroform: (datas) => {
      console.log(datas);
      return (
        <>
          <ParsingContainer {...NormalParsing.args} onChange={handleSero} />
          <div>
            <ol className="question-box">
              <li>{datas.question}</li>
            </ol>
            {/* <p className="passage-box">{datas.contenta}</p> */}
            <p className="passage-box">{datas.content}</p>
            {/* <table className="choice-box number-choice mce-item-table">
              <colgroup>
                <col style={{ width: "21px" }} data-mce-style="width: 21px;" />
                <col />
              </colgroup>
              <tbody>{datas.seroform}</tbody>
            </table> */}
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
    const tmp = Object.fromEntries(new FormData(event.currentTarget));

    const bogis = ["①", "②", "③", "④", "⑤"];
    const seroform = getOptions(tmp.seroform).map((item, idx) => (
      <>
        <tr data-answer="" data-q-number={idx + 1}>
          <td>{bogis[idx]}</td>
          <td>{item}</td>
        </tr>
      </>
    ));

    setDatas({ ...tmp, seroform });
    // setDatas({ ...tmp });
  };

  const handlePut = (event) => {};

  const handleRadio = (event) => {
    setRadio(event.target.value);
  };

  return (
    <article className={"normal-parsing"}>
      <nav>
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
      </nav>
      {forms[radio](datas)}
      {/* <ParsingContainer {...Tmpk.args} /> */}
    </article>
  );
}
