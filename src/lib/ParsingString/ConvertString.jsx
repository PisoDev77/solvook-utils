export default class ConvertString {
  constructor(value) {
    this.value = value;
  }

  get convertString() {
    const matches =
      this.value.match(
        /(<stro ng>[^<]*<\/strong>)|(<both>[^<]*<\/both>)|(<underline>[^<]*<\/underline>)|([^<]+)/g
      ) ?? [];

    return matches.map((match) => {
      // prettier-ignore
      if (match.startsWith("<both>")) {
        return <span
          style={{ textDecoration: "underline" }}
          data-mce-style="text-decoration: underline;">
            <strong>{match.replace('<both>','').replace('</both>','')}</strong>
        </span>
      } else {
        const str = match.trim();
        return /^[.,?!-'"`]/g.test(str) ? `${str} ` : ` ${str} `
      }
    });
  }
}
