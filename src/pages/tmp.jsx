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
    "9^9p9jyb4dQkO2dDekPhAy7-9^9",
    "9^9E2fPMpFSeGeqmUoRVv3vt9^9",
    "9^9tRSgzvyrJvBHv6MAtszkV9^9",
    "9^9naTssl63WEVrUg1l5nnRg9^9",
    "9^9m2dIpD0Mzz_sVqautokJm9^9",
    "9^9zaQaC_EjQVMKeMME_lRvz9^9",
    "9^9QUNfMboCFO7Ieai-S1HLD9^9",
    "9^9klbM6C3MRWnV2nIF3yrJp9^9",
    "9^9GUZxNkbCMV3RVsRkX6RgQ9^9",
    "9^9vi5zxmJmoCUALxCxL8cTT9^9",
    "9^9nQbFUw0T-j86vl0XpRh0E9^9",
    "9^9XMjFtsS8C-RC5pJET9Wwn9^9",
    "9^91bnM2D_iwPC1qG5zqb5CL9^9",
    "9^9NiaiDYjlcuSMxWj1-KbWm9^9",
    "9^9GhZTH1JsheB6H2Yp1jYqE9^9",
    "9^9L-Sx5QfSz-9DAGi3rDwNM9^9",
    "9^9iiGOasHoSy55XIIAh2e9e9^9",
    "9^9inKrm6PvMwG7QNIxo9cfE9^9",
    "9^9U69zK2KOfMrKfMrViLyHg9^9",
    "9^9-S0LvKaiE8T6SHFETDQE19^9",
    "9^9y3d7a-cMLXcIo4OubFqNo9^9",
    "9^9KNH3wKWDoC2v7cI00F5-a9^9",
    "9^9kDf10QFh3Pi5W_tM_UxqL9^9",
    "9^9OHGHOcqK2nKLAf4svpc9S9^9",
    "9^9rs6P8dfJKj5NXXNeSXA3q9^9",
    "9^9k5-2X9zbMCcV77ANPFPIG9^9",
    "9^9gfIeZzllhCRJiB-4WwpYy9^9",
    "9^9SEP6WeI_QcSp9e40OXZVx9^9",
    "9^93fi3FiDkz_YbYvEPcm0609^9",
    "9^90MCsSTJa72aQwUxVQzz0w9^9",
    "9^9AVAUWRF_3qvVcmcmE_C6s9^9",
    "9^9bE_MpuO912Qw1tkNMFblT9^9",
    "9^9n_Clthz4LBEjntpr-TFtH9^9",
    "9^9HGKM0PPcefLx1Bnap3LoJ9^9",
    "9^9JU4ndM3HT8B9vAxZ_UvnI9^9",
    "9^9bLlUgQYTqD3YKCYUWv31M9^9",
    "9^9Vm5J8saNdt0mMbYHk-SfW9^9",
    "9^9DIumPFUw4-Fnn9np_kuQx9^9",
    "9^9w3_0LZO4VA9ak4PinrKTk9^9",
    "9^9lqU_moLZE5jU_-8gI3JKK9^9",
    "9^9ZVZzWoqVGy_dyWHKSLc9U9^9",
    "9^96cPQh61j1GMZNtHiz7rr79^9",
    "9^9Iip34fn02e9MuqKtlOc8C9^9",
    "9^93l1CZzgmd-4PRmADDk6MR9^9",
    "9^9Rzq0BydrB2vbkrswlHfxA9^9",
    "9^9rIkOiO5Ew-KVwi0INjjRb9^9",
    "9^9sDgl0c5cFqkydLpPpkaLF9^9",
    "9^9iX2SRKmFitMRvYeDoFdNI9^9",
    "9^9yjI8kSWFloLneiUI9-dC_9^9",
    "9^95eTeDvh0e2ciQRFtuhMwn9^9",
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
