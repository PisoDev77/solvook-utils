import { useState } from "react";

import ParsingByOne from "../components/Containers/ParsingByOne";
import {
  NormalOption,
  Order,
  PutSentence,
} from "../components/Containers/ParsingByOne/ParsingByOne.stories";

export default function ParsingByOneP() {
  const [type, setType] = useState("normal_option");
  const [data, setData] = useState("normal_option");

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
    order: <ParsingByOne {...Order.args} onChange={handleChange} />,
  };

  return (
    <>
      <h1>파싱 한개씩</h1>
      <nav
        onChange={(event) => {
          const selectedType = event.target.value;
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
      <section>
        <div>{rendered[type]}</div>
        <div>{data.question}</div>
        <div>{data.content}</div>
        <div>{data.seroform}</div>
        <div>{data.answer}</div>
        <div>{data.none ? "있어" : "없어"}</div>
      </section>
    </>
  );
}
