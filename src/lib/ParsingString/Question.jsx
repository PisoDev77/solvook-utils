export default class Question {
  constructor(value) {
    this.value = value;
  }

  get content() {
    return this.value
      .replace(
        /않는|않은|틀린|못한|다른|없는|아닌|두[ ]?개|세[ ]?개|2[ ]?개/g,
        (match) => `<underline>${match}</underline>`
      )
      .replace(/(\d+)\s?\./, "$1. ")
      .replace(/것 +은|것\n은/g, "것은")
      .replace(/관계[ ]?없는/g, "관계<underline>없는</underline>");
  }
}
