export default class CircleNumber {
  constructor(value, isBoth = false) {
    this.value = value;
    this.isBoth = isBoth;
  }

  get content() {
    const res = this.value
      .replace(
        /([①-⑮ⓐ-ⓩ➀-➄][ ]?)\[((\[[^\]]*\]|[^\[\]]*))\]/g,
        "$1 <both>$2</both>"
      )
      .replace(/([①-⑮ⓐ-ⓩ➀-➄])\s*(\b\w+\b)/g, "$1 <both>$2</both>");

    return this.isBoth
      ? res.replace(
          /\[((\[[^\]]*\]|[^\[\]]*))\]/g,
          (match) =>
            `<strong>${match
              .replace("[", "[ ")
              .replace("]", " ]")
              .replace(/\/ | \//g, "/")}</strong>`
        )
      : res;
  }
}
