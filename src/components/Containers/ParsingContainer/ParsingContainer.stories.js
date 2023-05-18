import ParsingContainer from ".";

export default {
  title: "Containers/ParsingContainer",
  component: ParsingContainer,
};

export const WithSero = {
  args: {},
};

export const NormalParsing = {
  args: { headingTitle: "객관식 유형 5지 선단" },
};

export const OrderParsing = {
  args: { headingTitle: "순서 유형", contents: true },
};

export const ShortFormParsing = {
  args: { headingTitle: "순서 유형", isShorForm: true },
};

export const PutParsing = {
  args: { headingTitle: "주어진 문장 넣기 유형" },
};
