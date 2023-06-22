export default class Answer {
  constructor(content) {
    this.content = content;
  }

  get answerDOM() {
    return <div className="answer-box">답 : {this.content}</div>;
  }
}
