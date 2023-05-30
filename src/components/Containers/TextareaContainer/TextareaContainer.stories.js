import TextareaContainer from ".";

export default {
  title: "Containers/TextareaContainer",
  component: TextareaContainer,
};

export const Content = {
  args: { level: "h3", label: "본문", name: "content" },
};

export const Contents = {
  args: { level: "h3", label: "본문", amounts: 2, name: "content" },
};

export const SeroForm = {
  args: { level: "h3", label: "객관식 세로", name: "seroform" },
};
