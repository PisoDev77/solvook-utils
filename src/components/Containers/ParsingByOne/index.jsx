import "./parsingbyone.css";

import { Heading } from "../../Titles";
import { TextContainer } from "..";
import { AnswerForm } from "../TextContainer/TextContainer.stories";

export default function ParsingByOne(props) {
  const { title, onChange, items } = props;

  return (
    <form
      className={"parsing-container"}
      onChange={onChange}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Heading level={"h2"}>{title}</Heading>

      {items.map((item) => (
        <>{item}</>
      ))}

      <TextContainer {...AnswerForm.args} />
    </form>
  );
}
