import { useState } from "react";

import "../styles/QuestionType.css";

import { getPlural, getSingular } from "../lib/questiontype";
import HelpBtn from "./common/HelpBtn";
import { copyTargetDom } from "../lib/copy";

export default function QuestionType() {
  const [singular, setSingular] = useState("");
  const [plural, setPlural] = useState("");

  const [minus, setMinus] = useState(0);
  const [set, setSet] = useState(1);

  const [bool, setBool] = useState(false);

  const [questionTypes, setQuestionTypes] = useState([]);

  const handleSingluar = (event) => {
    const { value: questionStr } = event.target;
    setQuestionTypes(getSingular(questionStr, minus, set));
    setSingular(questionStr);
    setBool(true);
  };

  const handlePlural = (event) => {
    const { value: questionStr } = event.target;
    setQuestionTypes(getPlural(questionStr, minus, set));
    setPlural(questionStr);
  };

  return (
    <section className="question-type">
      <h2>문제 유형 - 우측에 결과 있음</h2>
      <div className={"minus"}>
        <label htmlFor="">가감</label>
        <input
          value={minus}
          onChange={(event) => {
            setMinus(event.target.value);
          }}
          type={"number"}
        />
      </div>
      <div className={"set"}>
        <label htmlFor="">세트</label>
        <input
          value={set}
          onChange={(event) => {
            setSet(event.target.value);
          }}
          type={"number"}
        />
      </div>

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
          통합 문제 유형 ( ※ · →ㅌ ) <HelpBtn idx={"통합 문제 도움말"} />
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
