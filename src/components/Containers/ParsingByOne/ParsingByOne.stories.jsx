import ParsingByOne from ".";

import { Question } from "../TextContainer/TextContainer.stories";

import { TextContainer } from "..";
import { TextareaContainer } from "..";

import {
  Content,
  SeroForm,
} from "../TextareaContainer/TextareaContainer.stories";

export default {
  title: "Containers/ParsingByOne",
  component: ParsingByOne,
};

export const NormalOption = {
  args: {
    title: "일반 객관식",
    description: "설명",
    items: [
      <TextContainer {...Question.args} />,
      <TextareaContainer {...Content.args} />,
      <TextareaContainer {...SeroForm.args} />,
    ],
  },
};

export const PutSentence = {
  args: {
    title: "주어진 문장",
    description: "설명",
    items: [
      <TextContainer {...Question.args} />,
      <TextareaContainer {...Content.args} />,
      <TextareaContainer {...Content.args} />,
    ],
  },
};

export const OneContent = {
  args: {
    title: "본문 하나",
    description: "설명",
    items: [<TextContainer {...Question.args} />],
  },
};

export const Order = {
  args: {
    title: "순서",
    description: "설명",
    items: [
      <TextContainer {...Question.args} />,
      <TextareaContainer {...Content.args} />,
      <TextareaContainer {...Content.args} />,
      <TextareaContainer {...SeroForm.args} />,
    ],
  },
};

export const Sub = {
  args: {
    title: "서술형",
    description: "설명",
    items: [<TextContainer {...Question.args} />],
  },
};
