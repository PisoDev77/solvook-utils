import { useState } from "react";

import ParsingByOne from "../components/Containers/ParsingByOne";
import {
  NormalOption,
  Order,
  PutSentence,
  OneContent,
  Sub,
} from "../components/Containers/ParsingByOne/ParsingByOne.stories";

export default function ParsingByOneP() {
  const [type, setType] = useState("normal_option");
  const [data, setData] = useState({});

  const handleChange = (event) => {
    const datas = Object.fromEntries(new FormData(event.currentTarget));
    setData(datas);
  };

  const rendered = {
    normal_option: (
      <ParsingByOne {...NormalOption.args} onChange={handleChange} />
    ),
    put_sentence: (
      <ParsingByOne {...PutSentence.args} onChange={handleChange} />
    ),
    one_content: <ParsingByOne {...OneContent.args} onChange={handleChange} />,
    order: <ParsingByOne {...Order.args} onChange={handleChange} />,
    sub: <ParsingByOne {...Sub.args} onChange={handleChange} />,
  };

  return (
    <>
      <h1>파싱 한개씩</h1>
      <nav
        onChange={(event) => {
          const selectedType = event.target.value;
          setData({});
          setType(selectedType);
        }}
      >
        <label>객관식</label>
        <input type="radio" name="type" value="normal_option" />
        <label>주어진 문장</label>
        <input type="radio" name="type" value="put_sentence" />
        <label>본문 하나</label>
        <input type="radio" name="type" value="one_content" />
        <label>순서</label>
        <input type="radio" name="type" value="order" />
        <label>서술형</label>
        <input type="radio" name="type" value="sub" />
      </nav>
      <section className={"temp"}>
        <section className={"temp-form"}>{rendered[type]}</section>
        <section className={"temp-res"}>
          <h2>템플릿 결과</h2>
          <button>복사하기</button>
          <div>
            <div className={"질문"}>{data.question}</div>
            {data.requirement ? (
              <div className={"조건"}>{data.requirement}</div>
            ) : (
              ""
            )}
            <div className={"본문"}>{data.content}</div>
            {data.seroform ? (
              <div className={"객관식"}>{data.seroform}</div>
            ) : (
              ""
            )}
            {data.shortform ? (
              <div className={"주관식"}>{data.shortform}</div>
            ) : (
              ""
            )}
            <div className={"답안"}>{data.answer}</div>
          </div>
        </section>
      </section>
    </>
  );
}
