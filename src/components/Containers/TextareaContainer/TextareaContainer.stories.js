import TextareaContainer from ".";

export default {
  title: "Containers/TextareaContainer",
  component: TextareaContainer,
};

export const Content = {
  args: { level: "h3", label: "본문" },
};

export const Contents = {
  args: { level: "h3", label: "본문", amounts: 2 },
};

export const SeroForm = {
  args: { level: "h3", label: "객관식 세로" },
};
