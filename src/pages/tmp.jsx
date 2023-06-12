import { useState } from "react";
import { copyTargetDom } from "../lib/copy";

export default function Tmp() {
  /* 2877 SET
  const [str, setStr] = useState("");
  const [res, setRes] = useState([]);
  const [origin, origins] = useState({ engs: [], kors: [] });

  const handleStr = (e) => {
    const val = e.target.value;

    const split_step_1 = val.split(/\[\d+\]/g);
    const split_step_2 = split_step_1.map((i) => i.split(/\(구동쓰\)/g));
    split_step_2.shift();

    // split_step_2[0] === eng
    // split_step_2[1] === kor

    // 우리말을 영어로 쓰시오.
    const ToEng = (no = 1) => {
      return split_step_2.map((i, idx) => (
        <>
          <ol className="question-box">
            <li>{idx + no}. 다음 우리말을 영어로 쓰시오.</li>
          </ol>
          <p className="passage-box">{i[1]}</p>
          <div className="essay-box">
            <p>→ </p>
          </div>
          <div class="answer-box">답 : {i[0]}</div>
        </>
      ));
    };

    setRes(ToEng(154));

    setStr(val);
  };
  const id_2877 = () => {
    return (
      <>
        <p>
          <h3>2877 Template</h3>
        </p>
        <textarea value={str} onChange={handleStr}></textarea>
        <div>{res}</div>
      </>
    );
  };

  return id_2877();
  */

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

  const [paragraphs, setParagraphs] = useState({
    paragraphA: "",
    paragraphB: "",
  });
  const [res, setRes] = useState([]);

  function highlightDifferentWords(textA, textB) {
    const wordsA = textA.split(" ");
    const wordsB = textB.split(" ");

    const maxLength = Math.max(wordsA.length, wordsB.length);

    let highlightedTextA = "";
    let highlightedTextB = "";
    const answers = [];
    const essays = [];

    let cnt = 1;
    for (let i = 0; i < maxLength; i++) {
      const wordA = wordsA[i] || "";
      const wordB = wordsB[i] || "";

      if (wordA !== wordB) {
        highlightedTextA += `${cnt++}) <strong>${wordA}</strong> `;
        highlightedTextB += `<strong>${wordB}</strong> `;
        answers.push(`${(cnt - 1 + "").padStart(2, "0")}) ${wordB} `);
        essays.push(`${(cnt - 1 + "").padStart(2, "0")}) _______________ `);
      } else {
        highlightedTextA += `${wordA} `;
        highlightedTextB += `${wordB} `;
      }
    }

    return {
      textA: highlightedTextA.trim(),
      textB: highlightedTextB.trim(),
      answers,
      essays,
    };
  }

  function findMissingWords(sentence1, sentence2) {
    const words1 = sentence1.split(" ");
    const words2 = sentence2.split(" ");
    console.log(words1, words2);
    if (words1.length !== words2.length) {
      return ["두 문장의 단어 수가 다릅니다."];
    }

    const missingWords = [];
    for (let i = 0; i < words1.length; i++) {
      if (words1[i].replace(/\n/, "") !== words2[i].replace(/\n/, "")) {
        missingWords.push(words2[i]);
      }
    }

    return missingWords;
  }

  const handleParagraph = (e) => {
    const { name, value } = e.target;

    const paragraphs_con = {};
    paragraphs_con[name] = value;

    setParagraphs({ ...paragraphs, ...paragraphs_con });

    const { paragraphA, paragraphB } = e.currentTarget;

    const a = paragraphA.value.split(/\.|\!|\?/g);
    const b = paragraphB.value.split(/(\([^)]+\))/g);
    const arr = a.map((i, idx) => (
      <>
        <ol className="question-box">
          <li>{idx + 28}. 아래 글을 보고 문장을 재배열 하시오.</li>
        </ol>
        <p className="passage-box">{b[idx * 2 + 1]}</p>
        <p className="passage-box">{b[idx * 2]}</p>
        <div class="essay-box">
          <p>→</p>
        </div>
        <div className="answer-box">답 : {i}</div>
      </>
    ));
    setRes(arr);

    // 다른 단어 찾기 2

    // let cnt = 1;
    // const a = paragraphA.value.replace(/____________/g, (match, group) => {
    //   return `${cnt++}) ${match}_______`;
    // });

    // const b = findMissingWords(paragraphA.value, paragraphB.value).map(
    //   (i, idx) => ` ${idx + 1}) ${i} `
    // );
    // const words1 = paragraphA.value.split(" ");
    // const words2 = paragraphB.value.split(" ");

    // setRes([...words1, <hr />, ...words2]);
    // setRes([
    //   a,
    //   <hr></hr>,
    //   b,
    //   <hr />,
    //   b.map((_, idx) => ` ( ${idx + 1} ) ___________________ `),
    // ]);

    // 두 글에서 다른 점 찾기
    // const compared = highlightDifferentWords(
    //   paragraphA.value,
    //   paragraphB.value
    // );

    // setRes([
    //   ...extractStringAndStrongTags(compared.textA),
    //   <hr />,
    //   compared.answers,
    //   <br />,
    //   compared.essays,
    // ]);
  };

  return (
    <form onChange={handleParagraph}>
      <label>글 A</label>
      <textarea
        style={{ resize: "both" }}
        value={paragraphs.paragraphA}
        name="paragraphA"
      ></textarea>
      <label>글 B</label>
      <textarea
        style={{ resize: "both" }}
        value={paragraphs.paragraphB}
        name="paragraphB"
      ></textarea>
      <section>{res}</section>
    </form>
  );
}
