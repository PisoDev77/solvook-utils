import { useState } from "react";

export default function TemplateP() {
  const [data, setData] = useState({ content: "", question: "", opt1: "" });

  const handleTA = (event) => {
    processData();
    setData({ ...data, content: event.target.value });
  };

  const handleQ = (event) => {
    processData();
    setData({ ...data, question: event.target.value });
  };

  const handleOpt = (event) => {
    processData();
    setData({ ...data, opt1: event.target.value });
  };

  const handleAns = (event) => {
    processData();
    setData({ ...data, answer: event.target.value });
  };

  const processData = () => {
    console.log(data);
  };

  return (
    <section>
      <form className={"temp-ss"}>
        <h2>질문</h2>
        <input
          name="question"
          type="text"
          value={data.question}
          onChange={handleQ}
        />
        <h2>본문</h2>
        <textarea
          name="content"
          value={data.content}
          onChange={handleTA}
          cols={15}
          rows={6}
        ></textarea>
        <h2>주관식 선택</h2>
        <input name="opt1" type="text" value={data.opt1} onChange={handleOpt} />
        <h2>답</h2>
        <input
          name="ans"
          type="text"
          value={data.answer}
          onChange={handleAns}
        />
      </form>

      <div className={"res"}>
        <ol className={"question-box"}>
          <li>{data.question}</li>
        </ol>
        <p className={"passage-box"}>{data.content}</p>
        {data?.opt1 ? (
          <div class="essay-box">
            <p>{data.opt1}</p>
          </div>
        ) : (
          ""
        )}
        <div class="answer-box">답 : {data.answer}</div>
      </div>
    </section>
  );
}
