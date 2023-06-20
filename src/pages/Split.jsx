import { useState } from "react";

export default function Split() {
  const [data, setData] = useState({
    str: "",
    seperator: ".",
    res: [],
  });

  const handleForm = (e) => {
    const { seperator, str } = e.currentTarget;
    const parttern = `\\d+\\${
      seperator.value.trim() === "." ?? seperator.value
    }`;
    const regex = new RegExp(parttern, "g"); // 정규 표현식 객체 생성

    setData({
      str: str.value,
      seperator: seperator.value,
      res: str.value.split(regex),
    });
  };

  return (
    <form onChange={handleForm}>
      <h3>숫자를 기준으로 나눌 수 있습니다</h3>
      <input type="text" name="seperator" value={data.seperator} />
      <label> 기준이 될 문자 ., ) 등을 입력하세요.</label>
      <br></br>
      <label>ex) [ 1. a 2. b 3. c ] 복사해서 확인해보세요.</label>
      <br />
      <label>ex) [ 1) a 2) b 3) c ] 복사해서 확인해보세요.</label>
      <hr />
      <textarea
        value={data.str}
        name={"str"}
        style={{ resize: "both", height: "20vh" }}
      ></textarea>
      <br />
      {data.res.map((i) => (
        <div>{i}</div>
      ))}
    </form>
  );
}
