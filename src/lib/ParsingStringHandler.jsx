import ConvertString from "./ParsingString/ConvertString";

import CircleNumber from "./ParsingString/CircleNumber";
import Question from "./ParsingString/Question";
import Normal from "./ParsingString/Normal";

import Option from "./ParsingString/Option";

export default class ParsingStringHandler {
  #StringClasses = {
    "circle-number": () =>
      new CircleNumber(
        this.value.replace(/\[br\]/g, (match) => `<strong>${match}</strong>`)
      ),
    normal: () => new Normal(this.value, false),
    numbering: () => new Normal(this.value, true),
    question: () => new Question(this.value),
    both: () => new CircleNumber(this.value, true),
    answer: () => new CircleNumber(this.value, true),
  };

  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  get ConvertParsingString() {
    return new ConvertString(this.#StringClasses[this.type]().content)
      .convertString;
  }

  get QuestionDOM() {
    return (
      <ol className="question-box">
        <li>{this.ConvertParsingString}</li>
      </ol>
    );
  }

  get PassageDOM() {
    return <p className="passage-box">{this.ConvertParsingString}</p>;
  }

  static OptionDOM(type, value) {
    return new Option(type, value).getDOM;
  }

  get AnswerDOM() {
    return <div className="answer-box">답 : {this.value}</div>;
  }
}
