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
  const {
    headingTitle,
    contents = false,
    isShortForm = false,
    onChange,
  } = props;

  return (
    <form
      className={"parsing-container"}
      onChange={onChange}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Heading level={"h2"}>{headingTitle}</Heading>
      <TextContainer {...Question.args} />
      {/* <TextareaContainer level="h3" label="본문 a" name="contenta" /> */}
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
    </form>
  );
}
