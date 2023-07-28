import "./page.css";

import { useState } from "react";

import StrongUnderline from "../lib/StrongUnderline";
import ParsingStringHandler from "../lib/ParsingStringHandler";

import { NormalParsing } from "../components/Containers/ParsingContainer/ParsingContainer.stories";
import { ParsingContainer } from "../components/Containers";

import {
  Question,
  Passage,
  Options,
  Essay,
  Answer,
} from "../lib/ParsingComponents";
import Radios from "../components/Containers/Radios";

// prettier-ignore
const contentTypes = [
  { label: "기본", id:'defaultType' },
  { label: (<> 00)&nbsp;<strong>[ wordA / wordB ]</strong>&nbsp;</>), id:'boldSqureType' },
  { label: (<> ① <strong style={{ textDecoration: "underline" }}>wordA</strong> </>), id:'boldSqureWithLineType' } 
];

export default function TemplateA() {
  const [datas, setDatas] = useState({});
  const [toggle, setToggle] = useState(0);

  const contentByToggle = ["boldSqure", "boldSqureWithNumber", "boldWithLine"];

  const handleParsingTemplate = (event) => {
    const formValues = Object.fromEntries(new FormData(event.currentTarget));

    const contentInstance =
      +toggle !== 2
        ? new StrongUnderline(formValues.content)
        : new ParsingStringHandler("circle-number", formValues.content)
            .ConvertParsingString;
    const contentAInstance =
      +toggle !== 2
        ? new StrongUnderline(formValues.contenta)
        : new ParsingStringHandler("circle-number", formValues.contenta)
            .ConvertParsingString;
    console.log(contentInstance);
    setDatas({
      question: new Question(formValues.question).questionDOM,
      content: new Passage(
        +toggle === 2
          ? contentInstance
          : contentInstance[contentByToggle[+toggle]]
      ).contentDOM,
      contenta: new Passage(
        +toggle === 2
          ? contentAInstance
          : contentAInstance[contentByToggle[+toggle]]
      ).contentDOM,
      seroform: new Options(formValues.seroform).seroDOM,
      essay: new Essay(formValues.essay).essayDOM,
      // garo: new Options(formValues.garo).garoDOM,
      answer: new Answer(formValues.answer).answerDOM,
    });
  };

  const { question, content, contenta, essay, seroform, garo, answer } = datas;

  return (
    <article className="template">
      <h4>본문 출력 유형</h4>
      {<Radios radios={contentTypes} setToggle={setToggle} toggle={toggle} />}
      <hr />
      <section className={"normal-parsing"}>
        <ParsingContainer
          {...NormalParsing.args}
          onChange={handleParsingTemplate}
        />
        <div>
          {question ?? ""}
          {contenta ?? ""}
          {content ?? ""}
          {essay ?? ""}
          {seroform ?? ""}
          {/* {garo ?? ""} */}
          {answer ?? ""}
        </div>
      </section>
    </article>
  );
}
