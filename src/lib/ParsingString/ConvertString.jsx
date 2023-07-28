export default class ConvertString {
  constructor(value) {
    this.value = value;
  }

  get convertString() {
    const matches =
      this.value.match(
        /(<strong>[^<]*<\/strong>)|(<both>[^<]*<\/both>)|(<underline>[^<]*<\/underline>)|([^<]+)/g
      ) ?? [];

    return matches.map((match) => {
      // prettier-ignore
      if (match.startsWith("<both>")) {
        return <span
          style={{ textDecoration: "underline" }}
          data-mce-style="text-decoration: underline;">
            <strong>{match.replace('<both>','').replace('</both>','')}</strong>
        </span>
      } else if(match.startsWith('<underline>')){
        return <span
          style={{ textDecoration: "underline" }}
          data-mce-style="text-decoration: underline;">
            {match.replace('<underline>','').replace('</underline>','')}
        </span>
      } else if(match.startsWith('<strong>')) {
        if(match === '<strong>[ br ]</strong>' || match === '[br]' || match === '<strong>[br]</strong>'){
          return <br />
        }
        return <strong>{match.replace('<strong>','').replace('</strong>','')}</strong>
      } else {
        const str = match.trim();
        return /^[.,?!-'"`]/g.test(str) ? `${str} ` : ` ${str} `
      }
    });
  }
}
