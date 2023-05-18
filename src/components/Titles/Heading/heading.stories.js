import Heading from ".";

export default {
  title: "Headings/heading",
  component: Heading,

  argTypes: {
    level: { control: "select", options: ["h1", "h2", "h3"] },
  },

  // tags: ["autodocs"],
};

export const Level1 = {
  args: { level: "h1", label: "H1 LEVEL 1 HEADING TITLE" },
};

export const Level2 = {
  args: { level: "h2", label: "H2 LEVEL 2 HEADING TITLE" },
};

export const Level3 = {
  args: { level: "h3", label: "H3 LEVEL 3 HEADING TITLE" },
};
