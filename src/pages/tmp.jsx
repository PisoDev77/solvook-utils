import { useState } from "react";

import { Onesam } from "../lib/TypesPDF";

export default function Tmp() {
  const [res, setRes] = useState([]);

  const [paragraphs, setParagraphs] = useState({
    paragraphA: "",
    paragraphB: "",
  });

  const handleParagraphs = (e) => {
    const { name, value } = e.target;

    const paragraphs_con = {};
    paragraphs_con[name] = value;

    setParagraphs({ ...paragraphs, ...paragraphs_con });
    const { paragraphA, paragraphB, startNo } = e.currentTarget;

    const res = new Onesam(paragraphA.value, paragraphB.value, startNo.value);
    // 직독직해
    setRes(res.fillBlank);
  };

  return (
    <form onChange={handleParagraphs}>
      <label>질문 번호</label>
      <input type={"number"} name="startNo" />
      <hr />
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
