export default class Essay {
  constructor(content) {
    this.content = content;
  }

  get essayDOM() {
    return this.content !== null ? (
      <div className="essay-box">
        <p>{this.content}</p>
      </div>
    ) : null;
  }
}
