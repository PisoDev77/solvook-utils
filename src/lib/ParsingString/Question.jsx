export default class Question {
  constructor(value) {
    this.value = value;
  }

  get content() {
    return this.value
      .replace(/않는|않은|틀린/g, (match) => `<underline>${match}</underline>`)
      .replace(/(\d+)\s?\./, "$1. ");
  }
}
