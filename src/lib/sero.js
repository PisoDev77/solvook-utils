const getOptions = (optionsStr) =>
  (optionsStr[0] === '"' && optionsStr[optionsStr.length - 1] === '"'
    ? optionsStr.substring(1, optionsStr.length - 1) // 양 끝을 없앤 문자열을 반환한다.
    : optionsStr
  )
    .split(/\n/)
    .map((item) => item.replace(/^./, "").trim());

export { getOptions };
