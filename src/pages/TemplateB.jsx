import { useState } from "react";
import "./templateB.css";

import ParsingStringHandler from "../lib/ParsingStringHandler";

export default function TemplateB() {
  const [parsing, setParsing] = useState({
    question: "",
    content: "",
    contentType: "circle-number",
    text: "",
    textType: "circle-number",
    option: [],
    optionType: "",
    answer: "",
  });

  const handleForm = (e) => {
    const formValues = Object.fromEntries(new FormData(e.currentTarget));
    const {
      question,
      content,
      text,
      contentType,
      textType,
      option,
      optionType,
      answer,
    } = formValues;

    // prettier-ignore
    setParsing({
      question: 
        question.trim() !== "" ? new ParsingStringHandler("question", question).QuestionDOM : "",
      content: 
        content.trim() !== "" ? new ParsingStringHandler(contentType, content).PassageDOM : "",
      contentType,
      text: 
        text.trim() !== "" ? new ParsingStringHandler(textType, text).PassageDOM : "",
      textType,
      option: 
        option.trim() !== "" 
        ? ParsingStringHandler.OptionDOM(optionType, option) 
        : (optionType === 'essay' ? ParsingStringHandler.OptionDOM(optionType, option) : ""),
      optionType,
      answer: new ParsingStringHandler('answer', answer).AnswerDOM,
    });
  };

  const { question, content, text, option, answer } = parsing;

  return (
    <>
      <h1>템플릿 다른 버전</h1>
      <main className="template-B">
        <form className="input" onChange={handleForm}>
          <h2>입력</h2>
          <h3>질문</h3>
          <input type="text" name="question" />
          <div className="contents">
            <div>
              <h3>본문 유형</h3>
              <select name="contentType">
                <option value={"normal"}>
                  대괄호 굵게 ex) <strong>[ a / b ]</strong>
                </option>
                <option value={"numbering"}>
                  대괄호 넘버링 ex) 1) <strong>[ a / b ]</strong>
                </option>
                <option value={"circle-number"}>
                  원 숫자 기호 ex) ② <span className="underline">word</span>
                </option>
                <option value={"both"}>
                  대괄호 굵게 와 원 숫자 기호 둘 다
                </option>
              </select>
              <textarea name="content" placeholder="본문" rows={8}></textarea>
            </div>
            <div>
              <h3>지문 유형</h3>
              <select name="textType">
                <option value={"normal"}>
                  대괄호 굵게 ex) <strong>[ a / b ]</strong>
                </option>
                <option value={"numbering"}>
                  대괄호 넘버링 ex) 1) <strong>[ a / b ]</strong>
                </option>
                <option value={"circle-number"}>
                  원 숫자 기호 ex) ② <span className="underline">word</span>
                </option>
                <option value={"both"}>
                  대괄호 굵게 와 원 숫자 기호 둘 다
                </option>
              </select>
              <textarea name="text" placeholder="지문" rows={8}></textarea>
            </div>
          </div>
          <div className="Options">
            <h3>선지 유형</h3>
            <select name="optionType">
              <option value={"none"}>없음</option>
              <option value={"sero"}>세로선지</option>
              <option value={"garo"}>가로선지</option>
              <option value={"abc"}>ABC</option>
              <option value={"essay"}>주관식 | 서술형</option>
            </select>
            <textarea name="option" placeholder="선지" rows={5}></textarea>
          </div>
          <h3>정답</h3>
          <input type="text" name="answer" />
        </form>
        <section className="output">
          <h2>출력</h2>
          {question}
          {content}
          {text}
          {option}
          {answer}
        </section>
      </main>
    </>
  );
}
