import Option from ".";

export default {
  title: "ParsingTemplate/Options",
  component: Option,
};

export const VerticalOptions = {
  args: {
    clasName: "choice-box number-choice mce-item-table",
    width: 21,
    direction: "vertical",
    options: [
      "1번 보기의 내용입니다.",
      "2번 보기의 내용입니다.",
      "3번 보기의 내용입니다.",
      "4번 보기의 내용입니다.",
      "5번 보기의 내용입니다.",
    ],
  },
};

const horizontalOptions = [
  "1번 보기",
  "2번 보기.",
  "3번 보기.",
  "4번 보기.",
  "5번 보기.",
];
export const HorizontalOptions = {
  args: {
    clsName: "choice-box number-choice no-text mce-item-table",
    direction: "horizontal",
    width: 100 / horizontalOptions.length,
    options: horizontalOptions,
  },
};

export const ABOptions = {
  args: {
    clsName: "choice-box alphabet-choice",
    direction: "ABC",
    width: 24,
    options: [
      ["1번 A", "1번 B"],
      ["2번 A", "2번 B"],
      ["3번 A", "3번 B"],
      ["4번 A", "4번 B"],
      ["5번 A", "5번 B"],
    ],
  },
};

export const ABCOptions = {
  args: {
    clsName: "choice-box alphabet-choice triple mce-item-table",
    direction: "ABC",
    width: 24,
    options: [
      ["1번 A", "1번 B", "1번 C"],
      ["2번 A", "2번 B", "2번 C"],
      ["3번 A", "3번 B", "3번 C"],
      ["4번 A", "4번 B", "4번 C"],
      ["5번 A", "5번 B", "5번 C"],
    ],
  },
};

export const OrderOptions = {
  args: {
    clasName: "choice-box number-choice mce-item-table",
    direction: "Order",
    width: 24,
    options: [
      ["(A)-(B)-(C)"],
      ["(A)-(B)-(C)"],
      ["(A)-(B)-(C)"],
      ["(A)-(B)-(C)"],
      ["(A)-(B)-(C)"],
    ],
  },
};
