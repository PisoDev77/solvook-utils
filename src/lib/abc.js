import keywords from "../constant/abcKeywords.json";

const getConnectiveOptions = (options) => {
  const pattern = new RegExp(`(${keywords.join("|")})`, "gi");

  return options.map((option) => option.match(pattern) || []);
};

const getOneSpaceOptions = (options) => {
  return options.map((option) => option.split(" ") || []);
};

export { getConnectiveOptions, getOneSpaceOptions };
