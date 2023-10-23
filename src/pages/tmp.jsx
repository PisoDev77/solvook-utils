import { useState } from "react";
import axios from "axios";

import "./tmp.css";

import { Onesam } from "../lib/TypesPDF/index";
import Button from "../components/Button";
import { CopytextButton } from "../components/Button/Button.stories";

import {
  Answer,
  Essay,
  Options,
  Passage,
  Question,
} from "../lib/ParsingComponents";
import StrongUnderline from "../lib/StrongUnderline";

export default function Tmp() {
  const [res, setRes] = useState([]);

  const [paragraphs, setParagraphs] = useState({
    product_id: "",
    paragraphA: "",
    paragraphB: "",
  });

  const ids = [
    "9^9tYA-hQLUYeluq47o-KSAX9^9",
    "9^9E-u7h6krQONQz35dvyiVj9^9",
    "9^9dDdnB1jkFQUVyw9SuudhL9^9",
    "9^9d2aZJ3UaEHhOdgjW2s_JD9^9",
    "9^9gSko4F5jOET9hU36SKkvd9^9",
    "9^9kVo2Ehfhvu1Qp9JOuZPs-9^9",
    "9^9rPprQyuzhahIVwMV09-tS9^9",
    "9^98CJYq0SneBJxzwR4Bx5SF9^9",
    "9^9GLjud0vIf03nMKoML3aaW9^9",
    "9^925E2pkMYXqYx968D_NPwZ9^9",
    "9^9dNlSM3gH91L1988_O8foZ9^9",
    "9^9U8NgW7nkSEnoojo7gfzaR9^9",
    "9^98LME22m-n4MrgcdTqPSWA9^9",
    "9^9Ls1theQcWUd_3cXMKSUvJ9^9",
    "9^9CR7L9NMefmAV_PUdy-zhT9^9",
    "9^9WkCCFvbfcMQcTrPFPCFU49^9",
    "9^9Yf3p4m6NaNGVOWT3lQfAR9^9",
    "9^9QWmufwk2DcpUV54cmex2-9^9",
    "9^9xQcqOUd7XOHGZMpiWHJam9^9",
    "9^9ZoR-Hn-d-mEH-Krb_AnwF9^9",
    "9^9NcPHWjlPP398R9EXm2C9R9^9",
    "9^9BEy473bvCH7I2A6bVN0dL9^9",
    "9^9_9Sk1KN9vk20JgJOpDLTK9^9",
    "9^9NXf36rImXPLtyYN25T95A9^9",
    "9^9Ol6mY8IFjfJIwJOeSTNyw9^9",
    "9^9PjcjW5ghQ9Y2Jt_GJMoap9^9",
    "9^98I92aLjgZrqbcFkuY_Emk9^9",
    "9^93j80DFcfbIN5msjcd7lUD9^9",
    "9^9hOLE7ZBg6Rfd-6cdUU4XC9^9",
    "9^9JMtjXZ7XII3E4Q2D3Y35P9^9",
    "9^9-qzzawYwegy6XI1MKPhoj9^9",
    "9^9NBhcJhxdIWUHK4ZGzdwm89^9",
    "9^9ASGUiaarSYT2r5hcewbE39^9",
    "9^9pLflfMyjHjjT5Vrnuz1Y49^9",
    "9^9CGxJhx9fT_ZgR__cyOSqz9^9",
    "9^9q0DS1dvLa6jA5bq8eYcy59^9",
    "9^96BOC2uBdJlNNjQGjK5Yp29^9",
    "9^9IUIzoSC3jf7FX1tEGZcJi9^9",
    "9^9Ohg5ueBPlTQ-shcljCspz9^9",
    "9^9duDvnFuGMZMEjgV89BY8F9^9",
    "9^9c9WfxN-Q-LFoCMqGLbfOM9^9",
    "9^9hPih208zOMfFXGMuIcW6z9^9",
    "9^9yRR4r3fkORY3Hlq8qiEZo9^9",
    "9^91eD93f_s8jucGznVC2H9B9^9",
    "9^9y1zIq1zAmRqQrJf5nDmq79^9",
    "9^98E8ZsWnjoC2CLm1VVf1FU9^9",
    "9^9GOqorr5gEA4D4_Os6udqk9^9",
    "9^9E-AI8o0k1pC3Eu7KmYZhz9^9",
  ];

  const handleSave = (e, tag, idx) => {
    e.preventDefault();
    if (!confirm("저장할꺼야?")) return;

    const uuid = ids[idx];

    const DOMStr = [...e.target.previousElementSibling.children]
      .map((i) => i.outerHTML)
      .join("");

    const ss = `<div id="${uuid}"
    class="question-wrap"
    style="font-size: 10pt;"
    data-mce-style="font-size: 10pt;">
    ${DOMStr}
    </div>`;

    const payload = {
      product_id: paragraphs.product_id,
      tag,
      data_type: "question_unit",
      data_value: ss,
      version: "20230328",
    };
    console.log(payload);
    axios.post("/api/v1/handout-data-item", payload);
  };

  const handleSaveAll = () => {
    console.log(document.querySelectorAll(".question-wrap"));
    if (!confirm("모두 저장할꺼야?")) return;

    document.querySelectorAll(".question-wrap").forEach((unit, idx) => {
      const payload = {
        product_id: paragraphs.product_id,
        tag: unit.previousElementSibling.textContent,
        data_type: "question_unit",
        data_value: `<div id="${ids[idx]}"
        class="question-wrap"
        style="font-size: 10pt;"
        data-mce-style="font-size: 10pt;">
        ${unit.innerHTML}
        </div>`,
        version: "20230328",
      };
      console.log(payload);
      axios.post("/api/v1/handout-data-item", payload);
    });
  };

  const handleParagraphs = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    const paragraphs_con = {};
    paragraphs_con[name] = value;
    setParagraphs({
      ...paragraphs,
      ...paragraphs_con,
      product_id: e.currentTarget.product_id.value,
    });
    const { paragraphA, paragraphB, startNo } = e.currentTarget;

    // 문제 마지막에 {문제}를 추가 해서 문제하나 단위로 끊기
    const parsingComponents = paragraphA.value
      .replace(/\n/g, "")
      .split(/\{문제\}/g);
    parsingComponents.pop();

    const answers = paragraphB.value.split(/\d+\)/g).map((answer) => {
      const regex = /\{(.)\}/g;
      const res = !Number.isNaN(+answer.replace(/\n/g, ""))
        ? String.fromCharCode(0x2460 + +answer - 1)
        : regex.test(answer)
        ? answer
            .split(regex)[2]
            .split(answer.split(regex)[1])
            .map((i, idx) => idx + 1 + ") " + i.replace(/\n/g, "").trim())
            .map((i) => <>{i}&nbsp;&nbsp;&nbsp;</>)
        : answer;
      return res;
    });
    answers.shift();
    // answer.split(answer.split(/\{.\}/g))

    // 질문과 본문으로 나눈다.
    let questionNo = +startNo.value;
    let answerIdx = 0;

    const questionProcess = parsingComponents.map((parsingComponent, idx) => {
      let noIdx = 0;
      let tagQ = [];
      let tagT = [];

      const [question, step1] = parsingComponent.split(/\{질문\}/g);
      if (question !== "통합") {
        tagQ.push(questionNo);
        if (question !== "통합2") {
          tagT.push(question.split(/\{(\d+)\}/)[1]);
        }
      }

      const [$content, step2] = step1.split(/\{본문\}/g);

      const [contentStr, contentType = "기본"] = $content.split(/(\{.+\})/g);
      const contentTypes = {
        "{네모원}": "boldIn",
        "{원}": "boldWithLine",
        "{원순서}": "boldWithLine",
        "{일반}": "boldSqure",
        "{순서}": "boldSqure",
        "{넘버링}": "boldSqureWithNumber",
        "{문장}": "boldSqure",
        "{둘다}": "both",
        기본: "str",
      };

      let contentRender = null;

      if (contentType === "{원순서}") {
        const [given, content] = contentStr.split("(A)");
        contentRender = [
          new Passage(new StrongUnderline(given)[contentTypes[contentType]])
            .contentDOM,
          new Passage(
            new StrongUnderline("(A) " + content)[contentTypes[contentType]]
          ).OrderTMP,
        ];
      } else if (contentStr.trim() === "") {
        contentRender = "";
      } else if (contentType === "{순서}") {
        contentRender = new Passage(contentStr).OrderDOM;
      } else if (contentType === "{문장}") {
        contentRender = contentStr
          .split("[지문]")
          .map((i) => new Passage(i).contentDOM);
      } else {
        contentRender = new Passage(
          new StrongUnderline(contentStr)[contentTypes[contentType]]
        ).contentDOM;
      }

      const stuffs = step2.split(
        /({서브질문}|{지문}|{주관식}|{가로선지}|{세로선지}|{ABC}|{AB}|{서브답})/g
      );

      const container = [];

      let cnt = 1;
      for (let i = 0; i < stuffs.length; i += 2) {
        const type = stuffs[i + 1];
        const tmp = stuffs[i];

        if (type === "{서브질문}") {
          const tmp2 = tmp.split(/\{(\d+)\}/);
          if (question !== "통합2") {
            tagQ.push(questionNo);
            tagT.push(tmp2[1]);
          }
          if (question === "통합2") {
            tagT.push(tmp2[1]);
          }

          const tmpStr = tmp2[0].replace(/\d+\./g, "");
          container.push(
            // new Question(tmp).subQuestionDOM
            new Question(
              (question === "통합" ? questionNo++ + "." : cnt++ + ") ") + tmpStr
            ).subQuestionDOM
          );
        }

        if (type === "{지문}") {
          container.push(new Passage(tmp).contentDOM);
        }

        if (type === "{가로선지}") {
          container.push(new Options(tmp).garoDOM);
        }

        if (type === "{세로선지}") {
          container.push(new Options(tmp).seroDOM);
        }

        if (type === "{ABC}") {
          container.push(new Options(tmp).ABCDOMByHipen);
        }

        if (type === "{AB}") {
          container.push(new Options(tmp).ABDOMByHipen);
        }

        if (type === "{주관식}") {
          container.push(new Essay(tmp.trim() === "" ? "→" : tmp).essayDOM);
        }

        if (
          // (question === "통합" || question === "통합2") &&
          type === "{서브답}"
        ) {
          container.push(new Answer(answers[answerIdx++]).answerDOM);
        }
      }

      stuffs.pop();
      const tag =
        [...new Set(tagQ)].map((q) => q + "번").join(",") +
        ",1세트," +
        [...new Set(tagT)].join(",");

      const jh =
        question === "통합2"
          ? questionNo++ +
            ". " +
            Question.getStandardQuestions("통합").replace("※", "")
          : Question.getStandardQuestions("통합");
      return (
        // prettier-ignore
        <>
        {<><hr /><Button {...CopytextButton.args}>{tag}</Button></>}
        <div className="question-wrap">
          { question ==='통합'|| question ==='통합2' 
             ? new Question( jh ).questionDOM 
            //  : new Question(`${+startNo.value + idx}. ${question}`).questionDOM }
             : new Question(`${questionNo++}. ${question.replace(/\d+\./,'').replace(/\{\d+\}/g, "")}`).questionDOM }
          { contentRender }
          { container }
          { question === '통합' || question ==='통합2' || [...new Set(tagT)][0] === "5" ? '' : new Answer(answers[answerIdx++]).answerDOM }
        </div>
          {<button onClick={(e)=>{handleSave(e,tag,idx)}} >SAVE</button>}
        </>
      );
    });

    setRes(questionProcess);
  };

  const shortkeys = {
    ctrl: {
      1: "{}{질문}",
      2: "{일반}{본문}",
      22: "{순서}{본문}",
      23: "{문장}{본문}",
      24: "{일반}{본문}",
      25: "{원순서}{본문}",
      21: "{원}{본문}",
      0: `{서브질문}`,
      5: "{주관식}",
      4: "{ABC}",
    },
    alt: {
      b: "{문제}",
      0: "{서브답}",
      1: "통합{질문}",
      3: "{세로선지}",
      4: "{가로선지}",
    },
  };

  const funcTmp = (textarea, replaced) => {
    const cursorPosition = textarea.selectionStart; // 현재 커서 위치

    const text = textarea.value;
    const newText =
      text.slice(0, cursorPosition) + replaced + text.slice(cursorPosition); // 현재 커서 위치 다음에 '문자' 추가

    textarea.value = newText;
    textarea.selectionStart = textarea.selectionEnd = cursorPosition + 2; // 커서 위치 업데이트
  };

  const handleShortKey = (e) => {
    if (e.altKey) {
      if (!shortkeys.ctrl[e.key]) return;
      funcTmp(e.target, shortkeys.ctrl[e.key]);
    }

    if (e.ctrlKey) {
      if (!shortkeys.alt[e.key]) return;
      funcTmp(e.target, shortkeys.alt[e.key]);
    }
  };

  return (
    <>
      <div>
        {Object.values(shortkeys.ctrl).map((i) => (
          <Button {...CopytextButton.args} type="copy-text-button">
            {i}
          </Button>
        ))}
        <br />
        {Object.values(shortkeys.alt).map((i) => (
          <Button {...CopytextButton.args} type="copy-text-button">
            {i}
          </Button>
        ))}
      </div>
      <button type="button" onClick={handleSaveAll}>
        saveAll
      </button>
      <hr />

      <form className="tmp-container" onChange={handleParagraphs}>
        <div className="tmp-inputs">
          <label>product_id</label>
          <input type={"text"} name="product_id" />
          <label>질문 번호</label>
          <input type={"number"} name="startNo" />
          <div>
            <div className="tmp-inputs-ta" onKeyDown={handleShortKey}>
              <label>paragraphA</label>
              <textarea
                tyle={{ resize: "both" }}
                value={paragraphs.paragraphA}
                name="paragraphA"
              ></textarea>
            </div>
            <div className="tmp-inputs-ta">
              <label>paragraphB</label>
              <textarea
                tabIndex={0}
                style={{ resize: "both" }}
                value={paragraphs.paragraphB}
                name="paragraphB"
              ></textarea>
            </div>
          </div>
        </div>
        <section className="tmp-res">{res}</section>
      </form>
    </>
  );
}
