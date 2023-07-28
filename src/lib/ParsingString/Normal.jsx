export default class Normal {
  constructor(value, isNumbering) {
    this.value = value;
    this.isNumbering = isNumbering;
  }

  get content() {
    let number = 1;
    return this.value.replace(
      /\[(\[[^\]]*\]|[^\[\]]*)\]/g,
      (match) =>
        `${
          this.isNumbering && match !== "[br]" ? number++ + ") " : ""
        }<strong>${match
          .replace("[", "[ ")
          .replace("]", " ]")
          .replace(/\/ | \//g, "/")
          .replace(/\//g, " / ")}</strong>`
    );
  }
}
