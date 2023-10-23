export default class Question {
  #negatives = ["없는", "어색한"];

  constructor(questionStr) {
    this.questionStr = questionStr
      .replace(
        /못한|다른|않는|없는|어색한|틀린|않은|아닌|두 개\w|세 개|2개/g,
        (match) => `<under>${match}</under>`
      )
      .replace(/\d+\.[+A-Z+가-힣+]?/, (match) => `${match.replace(".", ". ")}`)
      .replace(" ?", "? ")
      .replace(" .", ".")
      .replace(/것.+은|것\n은/g, "것은")
      .replace("관계<under>없는</under>", "관계<under>(농)없는</under>");
  }

  #getUnderlineElement(str) {
    // prettier-ignore
    return (<span 
              style={{ textDecoration: "underline" }}
              data-mce-style="text-decoration: underline;">
              {str}
            </span>);
  }

  #extractUnder(str) {
    const matches = str.match(/(<under>[^<]*<\/under>)|([^<]+)/g) ?? [];

    return matches.map((match) =>
      match.startsWith("<under>") ? (
        <>
          {match.includes("(농)") ? "" : <>&nbsp;</>}
          <span
            style={{ textDecoration: "underline" }}
            data-mce-style="text-decoration: underline;"
          >
            {match
              .replace("<under>", "")
              .replace("</under>", "")
              .replace("(농)", "")}
          </span>
          &nbsp;
        </>
      ) : (
        match.trim()
      )
    );
  }

  get question() {
    return this.#extractUnder(this.questionStr);
  }

  get questionDOM() {
    return (
      <ol className="question-box">
        <li>{this.#extractUnder(this.questionStr)}</li>
      </ol>
    );
  }
  get subQuestionDOM() {
    return (
      <ol className="question-box sub-question">
        <li>{this.#extractUnder(this.questionStr)}</li>
      </ol>
    );
  }

  static getStandardQuestions(str) {
    const standards = {
      통합: "※ 다음 글을 읽고 물음에 답하시오.",
    };

    return standards[str];
  }
}
