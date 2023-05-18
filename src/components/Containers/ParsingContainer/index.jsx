import "./parsingcontainer.css";

import { Heading } from "../../Titles";
import {
  Question,
  ShortForm,
  AnswerForm,
} from "../TextContainer/TextContainer.stories";
import { TextContainer } from "..";

import {
  Content,
  Contents,
  SeroForm,
} from "../TextareaContainer/TextareaContainer.stories";
import { TextareaContainer } from "..";

export default function ParsingContainer(props) {
  const { headingTitle, contents = false, isShortForm = false } = props;

  return (
    <section className={"parsing-container"}>
      <Heading level={"h2"}>{headingTitle}</Heading>
      <TextContainer {...Question.args} />
      {contents ? (
        <TextareaContainer {...Contents.args} />
      ) : (
        <TextareaContainer {...Content.args} />
      )}

      {isShortForm ? (
        <TextContainer {...ShortForm.args} />
      ) : (
        <TextareaContainer {...SeroForm.args} />
      )}

      <TextContainer {...AnswerForm.args} />
    </section>
  );
}
