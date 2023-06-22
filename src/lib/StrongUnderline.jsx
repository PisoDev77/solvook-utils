/**
 * @author Piso
 * @file StrongUnderline.jsx
 * @description 문자열을 볼드나 밑줄 처리하여 JSX 포맷으로 ReactElement를 반환하는 클래스
 */

/**
 * @class StrongUnderline
 * @description 복사한 텍스트 내용을 표준화된 형식으로 변환하는 데 도움을 주는 클래스입니다.
 */
export default class StrongUnderline {
  /**
   * Create a Copy instance.
   * @constructor
   * @param {string} str - 원본 PDF로부터 복사해온 본문의 문자열 또는 텍스트
   */
  constructor(str) {
    this.str = str;
    this.#replaceNumbers();
  }
  /**
   * @property {string} str - 현재 문자열
   * @description Getter and setter for the 'str' property.
   * @returns {string} - The current string value.
   */
  get str() {
    return this._str;
  }

  /**
   * @property {string} str - The new string value to set.
   * @description Setter for the 'str' property.
   * @param {string} inputStr - The new string value to set.
   */
  set str(inputStr) {
    this._str = inputStr;
  }

  /**
   * @private
   * @method #replaceNumbers
   * @description 숫자기호를 쏠북 파싱 규격에 맞는 유니코드로 치환합니다.
   * @returns {void}
   */
  #replaceNumbers() {
    this.str
      .replace(/➀|❶/g, "①")
      .replace(/➁|❷/g, "②")
      .replace(/➂|❸/g, "③")
      .replace(/➃|❹/g, "④")
      .replace(/➄|❺/g, "⑤");
  }

  /**
   * @method #wrapStrong
   * @description 원 숫자 또는 원 소문자 다음 텍스트에 볼드체와 밑줄을 적용하여 반환합니다.
   * @returns {string} 변환된 텍스트
   * @private
   */
  #wrapNextWordWithBold() {
    return this.str.replace(
      /([①-⑮ⓐ-ⓩ])\s*(\b\w+\b)/g,
      `$1 <strong>$2</strong>`
    );
  }

  /**
   * @method #wrapStrong
   * @description 대괄호로 둘러싸인 텍스트에 볼드체를 적용하여 반환합니다.
   * @returns {string} 변환된 텍스트
   * @private
   */
  #wrapStrong() {
    return this._str.replace(
      /\[(\[[^\]]*\]|[^\[\]]*)\]/g,
      (match) =>
        `<strong>${match
          .replace("[", "[ ")
          .replace("]", " ]")
          .replace(/\/ | \//g, "/")
          .replace(/\//g, " / ")}</strong>`
    );
  }

  /**
   * @method #wrapStrongWithNumber
   * @description 대괄호로 둘러싸인 텍스트에 볼드체와 번호를 적용하여 반환합니다.
   * @returns {string} 변환된 텍스트
   * @private
   */
  #wrapStrongWithNumber() {
    let cnt = 1;
    return this._str.replace(
      /\[(\[[^\]]*\]|[^\[\]]*)\]/g,
      (match) =>
        `${cnt++}) <strong>${match
          .replace("[", "[ ")
          .replace("]", " ]")
          .replace(/\/ | \//g, "/")
          .replace(/\//g, " / ")}</strong>`
    );
  }

  /**
   * @method extractByStrong
   * @description Extracts text wrapped in <strong> tags or non-tagged text from the given string.
   * @param {string} str - The input string to extract from.
   * @returns {Array} - An array containing the extracted text with <strong> tags and trimmed non-tagged text.
   */
  #extractByStrong(str) {
    const matches = str.match(/(<strong>[^<]*<\/strong>)|([^<]+)/g) ?? [];

    return matches.map((match) => {
      if (match.startsWith("<strong>")) {
        console.log(match.replace("<strong>", "").replace("</strong>", ""));
      }
      return match.startsWith("<strong>") ? (
        <>
          &nbsp;
          <strong>
            {match.replace("<strong>", "").replace("</strong>", "")}
          </strong>
          &nbsp;
        </>
      ) : (
        match.trim()
      );
    });
  }

  /**
   * @method extractLineBoldByStrong
   * @description Extracts text wrapped in <strong> tags or non-tagged text from the given string and applies underline style.
   * @param {string} str - The input string to extract from.
   * @returns {Array} - An array containing the extracted text with <strong> tags, wrapped in <span> with underline style, and trimmed non-tagged text.
   */
  #extractLineBoldByStrong(str) {
    const matches = str.match(/(<strong>[^<]*<\/strong>)|([^<]+)/g) ?? [];

    return matches.map((match) =>
      match.startsWith("<strong>") ? (
        <>
          &nbsp;
          <span
            style={{ textDecoration: "underline" }}
            data-mce-style="text-decoration: underline;"
          >
            <strong>
              {match.replace("<strong>", "").replace("</strong>", "")}
            </strong>
          </span>
          &nbsp;
        </>
      ) : (
        match.trim()
      )
    );
  }

  /**
   * @method boldSqure
   * @description 대괄호 안에 포함된 텍스트에 볼드체 서식을 적용합니다.
   */
  get boldSqure() {
    const res = this.#extractByStrong(this.#wrapStrong());
    return res.length === 0 ? null : res;
  }

  /**
   * @method boldSqureWithNumber
   * @description 대괄호 안에 포함된 텍스트에 볼드체 서식과 번호를 적용합니다.
   */
  get boldSqureWithNumber() {
    const res = this.#extractByStrong(this.#wrapStrongWithNumber());
    return res.length === 0 ? null : res;
  }

  /**
   * @method boldWithLine
   * @description 텍스트에 볼드체와 밑줄을 적용합니다.
   */
  get boldWithLine() {
    const res = this.#extractLineBoldByStrong(this.#wrapNextWordWithBold());
    return res.length === 0 ? null : res;
  }
}
