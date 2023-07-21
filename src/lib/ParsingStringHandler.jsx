import CircleNumber from "./ParsingString/CircleNumber";

export default class ParsingStringHandler {
  #StringClasses = {
    "circle-number": () => new CircleNumber(this.value),
  };

  constructor(type, value) {
    this.type = type;
    this.value = value;
  }

  get ConvertParsingString() {
    return this.#StringClasses[this.type]().content;
  }
}
