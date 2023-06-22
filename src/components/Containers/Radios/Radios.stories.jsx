import Radios from ".";

export default {
  title: "Containers/Radios",
  component: Radios,
};

export const Default = {
  args: {
    radios: [
      { label: "1번 라디오" },
      { label: "2번 라디오" },
      { label: "3번 라디오" },
    ],
  },
};
