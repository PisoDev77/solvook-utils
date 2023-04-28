import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../styles/pdf.css";

export default function Answer() {
  const [answers, setAnswers] = useState("");
  const [tmp, setTmp] = useState([]);
  const [code, setCode] = useState(1);

  const handleAnswers = (event) => {
    const { value } = event.target;
    const arr = value.trim().split(/구분자!!!/); // 문자열을 구분자 기준으로 나누어 배열로 반환
    setAnswers(value.trim());
    setTmp(arr);
    console.log(arr);
  };

  const handleCreatPdf = (event) => {
    const $ele = event.target.previousElementSibling;
    console.dir($ele);
    const { code, filename } = $ele.dataset;
    // HTML 요소를 캡처합니다.
    html2canvas($ele).then((canvas) => {
      // 캔버스 이미지를 JPEG 데이터로 변환합니다.
      const imgData = canvas.toDataURL("image/png");

      // PDF 파일을 생성합니다.
      const pdf = new jsPDF();

      // PDF 파일에 이미지를 추가합니다.
      pdf.addImage(imgData, "PNG", 0, 0);

      // PDF 파일을 다운로드합니다.
      pdf.save(`${filename}.pdf`);
    });
  };

  return (
    <>
      <input
        value={code}
        type="number"
        onChange={(e) => setCode(e.target.value)}
      />
      <hr></hr>
      <textarea
        value={answers}
        onChange={handleAnswers}
        cols="30"
        rows="10"
      ></textarea>
      <hr></hr>
      {tmp.map((i, idx) => (
        <section key={idx} className="pdf-to-answer">
          <div
            className={`test`}
            data-code={code}
            data-filename={`${code}_${idx}_0.pdf`}
          >
            {idx}. {i}
          </div>
          <button onClick={handleCreatPdf}>
            {`${code}_${idx}_0.pdf`} download
          </button>
        </section>
      ))}
    </>
  );
}
