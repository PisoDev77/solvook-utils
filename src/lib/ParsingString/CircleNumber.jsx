import ConvertString from "./ConvertString";

export default class CircleNumber {
  constructor(value) {
    this.value = value;
  }

  get content() {
    return new ConvertString(
      this.value
        .replace(
          /([①-⑮ⓐ-ⓩ➀-➄][ ]?)\[((\[[^\]]*\]|[^\[\]]*))\]/g,
          "$1 <both>$2</both>"
        )
        .replace(/([①-⑮ⓐ-ⓩ➀-➄])\s*(\b\w+\b)/g, "$1 <both>$2</both>")
    ).convertString;
  }
}
