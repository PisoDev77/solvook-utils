import { useState } from "react";

export default function Split() {
  const [data, setData] = useState({
    str: "",
    seperator: ".",
    res: [],
  });

  const handleForm = (e) => {
    const { seperator, str } = e.currentTarget;

    const anss = [];
    const arr = str.value
      .replace(/\n/g, " ")
      .split("{구분}")
      .filter((i) => i.trim() !== "")
      .map((one) => {
        console.log(one);
        const tmp = one.replace(/\n/g, " ").split("//");
        const [eng, kor] = tmp;

        anss.push(["1) " + kor, <br />]);
        return [
          "아래 글을 보고 단어를 재배열하시오. {19}{질문}",
          <br />,
          eng,
          <br />,
          "{일반}{본문}",
          <br />,
          kor.replace(/\[|\]/g, ""),
          <br />,
          "{지문}{주관식}{문제}",
          <br />,
        ];
      });
    const res = [...arr];

    setData({
      str: str.value,
      seperator: seperator.value,
      res,
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
      {data.res}
    </form>
  );
}
