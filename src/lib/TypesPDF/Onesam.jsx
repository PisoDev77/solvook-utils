/**
 * ## 원본 유형 일등급쌤
 * ### 구성요소
 * - 직독직해
 * ### 예시 일등급쌤 7007
 */
export default class Onesam {
  constructor(engStr, korStr, no) {
    this.engStr = engStr;
    this.korStr = korStr;
    this.engArr = [];
    this.korArr = [];
    this.no = +no;
  }

  // 직독직해
  /**
   * 1. paragraphA에서 영어 문장을 입력받습니다.
   *  + 영어문장은 1. 형태의 번호로 그리고 ➝이 있습니다.
   *  + 번호 형태를 기준으로 split 하고 ➝를 빈문자열로 치환하여 engArr에 저장합니다.
   * 2. paragraphB에서 한글 문장을 입력받습니다.
   *  + 한글 문장은 [.?!] 기준으로 split 합니다.
   *  + split된 결과에서는 마침 표들이 모두 제거된 뒤이니 파싱 작업시 유의하여 추가하여 작업해줍니다.
   *  + ?, !가 있는 경우 생략여부를 확인해줍니다.
   */
  get translateEng() {
    this.#isSameLength();

    this.engArr = this.engStr
      .split(/\d+\./g)
      .map((eng) => eng.replace(/➝/g, "").replace(/\n/g, "").trim());
    this.engArr.shift();

    this.korArr = this.korStr
      .split(/[.!?]/g)
      .map((kor) => (kor.replace(/\n/g, "") + ".").trim());
    this.korArr.pop();

    return this.engArr.map((eng, idx) => [
      <ol className="question-box sub-question">
        <li>{this.no + idx}. 다음 각 문장을 해석하시오.</li>
      </ol>,
      <p key={idx + "-translation"} className="passage-box">
        {eng}
      </p>,
      <div class="essay-box">
        <p>➝&nbsp;</p>
      </div>,
      <div class="answer-box">답: {this.korArr[idx]}</div>,
    ]);
  }

  // 빈칸 넣기
  /**
   * 1. paragraphA에는 직독직해 예문으로부터 숫자와 화살표를 지운 본문을 복사하여 넣는다.
   * 2. paragraphB에는 {con}으로 나뉠 빈칸 본문과 해석본능 넣는다.
   */
  get fillBlank() {
    this.engArr = this.engStr
      .replace(/[0-9][0-9]\./g, "")
      .replace(/➝/g, "")
      .replace(/\n/g, "")
      .replace(/  /g, " ")
      .trim();
    this.korArr = this.korStr.replace(/\n/g, "").trim();
    let [blanks, kor] = this.korArr.split(/{con}/);

    let filteredBlank = blanks.match(/__/g);
    while (filteredBlank) {
      blanks = blanks.replace("__", "_");
      filteredBlank = blanks.match(/__/g);
    }

    const a = this.engArr.split(" ");
    const b = blanks.split(" ");

    const answers = [];
    const content = [];

    let cnt = 1;
    let tmp = [];
    for (let idx = 0; idx < a.length; idx++) {
      if (a[idx] !== b[idx]) {
        if (idx < a.length && a[idx + 1] !== b[idx + 1]) {
          tmp.push(a[idx]);
        } else {
          tmp.push(a[idx]);
          answers.push(tmp.join(" "));
          tmp = [];
        }

        // prettier-ignore
        content.push(
          `${idx > 0 && a[idx - 1] !== b[idx - 1] ? "" : cnt++ + ')'} ${new Array( a[idx].length + 6 ).fill("_").join("")}`
        );
      } else {
        content.push(b[idx]);
      }
    }

    return [
      <ol className="question-box sub-question">
        <li>{this.no}. 빈칸에 들어갈 적절한 단어를 쓰시오.</li>
      </ol>,
      <p className="passage-box">{content.join(" ")}</p>,
      <p className="passage-box">{kor}</p>,
      // prettier-ignore
      <div class="answer-box">
        답: {answers.map((answer, idx) => (<> {idx + 1}) {answer}&nbsp;&nbsp;&nbsp; </>))}
      </div>,
    ];
  }

  #isSameLength() {
    const eLen = this.engArr.length;
    const kLen = this.korArr.length;

    if (eLen !== kLen) {
      throw new Error(
        `영문장(${eLen})과 한글문장(${kLen})의 개수가 맞지 않습니다.`
      );
    }
  }
}
