import { useState } from "react";

import "../styles/QuestionType.css";

import { getPlural, getSingular } from "../lib/questiontype";
import HelpBtn from "./common/HelpBtn";
import { copyTargetDom } from "../lib/copy";

export default function QuestionType() {
  const [singular, setSingular] = useState("");
  const [plural, setPlural] = useState();

  const [minus, setMinus] = useState(0);

  const [questionTypes, setQuestionTypes] = useState([]);

  const handleSingluar = (event) => {
    const { value: questionStr } = event.target;
    setQuestionTypes(getSingular(questionStr, minus));
    setSingular(questionStr);
  };

  const handlePlural = (event) => {
    const { value: questionStr } = event.target;
    setQuestionTypes(getPlural(questionStr));
    setPlural(questionStr);
  };

  return (
    <section className="question-type">
      <h2>문제 유형 - 우측에 결과 있음</h2>
      <input
        value={minus}
        onChange={(event) => {
          setMinus(event.target.value);
        }}
        className={"minus"}
        type={"number"}
      />
      <div className="textarea-with-explanation">
        <h3>
          단일 문제 유형 <HelpBtn idx={"단일 문제 도움말"} />
        </h3>
        <textarea
          value={singular}
          onChange={handleSingluar}
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div className="textarea-with-explanation">
        <h3>
          통합 문제 유형 ( ※ ) <HelpBtn idx={"통합 문제 도움말"} />
        </h3>

        <textarea
          value={plural}
          onChange={handlePlural}
          cols={30}
          rows={10}
        ></textarea>
      </div>

      <section className={"question-types-result regular-box"}>
        <h2>문제 유형 변환 결과</h2>
        {questionTypes.length > 0 ? (
          <div>
            {questionTypes.map((i) => (
              <button
                onClick={(event) => {
                  copyTargetDom(event.target);
                }}
                key={i}
              >
                {i}
              </button>
            ))}
          </div>
        ) : (
          ""
        )}
      </section>
    </section>
  );
}
