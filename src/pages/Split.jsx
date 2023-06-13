import { useState } from "react";

export default function Split() {
  const [str, setStr] = useState("");
  const [res, setRes] = useState([]);

  const handleForm = (e) => {
    const { seperator, str } = e.currentTarget;
    const parttern = `\\d\\${seperator.value ?? "."}+`;
    const regex = new RegExp(parttern, "gi"); // 정규 표현식 객체 생성
    const arr = str.value.split(regex);
    console.log(arr);
    setRes(arr);
    setStr(str.value);
  };

  return (
    <form onChange={handleForm}>
      <input type="text" name="seperator" />
      <br></br>
      <label>. 또는 ) 등 나눌 기준이 될 문자</label>
      <hr />
      <textarea
        value={str}
        name="str"
        style={{ resize: "both", height: "20vh" }}
      ></textarea>
      <br />
      {res.map((i) => (
        <div>{i}</div>
      ))}
    </form>
  );
}
