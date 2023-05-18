import TextContainer from ".";

export default {
  title: "Containers/TextContainer",
  component: TextContainer,
};

export const Question = {
  args: { level: "h3", label: "질문" },
};

export const ShortForm = {
  args: { level: "h3", label: "주관식 지문" },
};

export const AnswerForm = {
  args: { level: "h3", label: "답" },
};
