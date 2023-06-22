export default class Passage {
  constructor(content) {
    this.content = content;
  }

  get contentDOM() {
    return this.content !== null ? (
      <p className="passage-box">{this.content}</p>
    ) : null;
  }
}
